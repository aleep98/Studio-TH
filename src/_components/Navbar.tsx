"use client";

import React, { useState } from 'react';
import { Button } from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Serviços' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-pink-600 font-name">
              Thainá Roberta
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:bg-pink-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="primary" size="medium">
              <a href="#schedule">Agendar</a>
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-pink-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="primary" size="medium" onClick={() => setIsOpen(false)}>
                <a href="#schedule">Agendar</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};