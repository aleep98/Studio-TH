import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Informações do Studio */}
          <div className="space-y-4">
            <h3
              id="studio"
              className="text-3xl font-name font-bold text-pink-500"
            >
              Thainá Roberta
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Realçando sua beleza natural com técnicas exclusivas e atendimento
              personalizado.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-pink-50">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-pink-500 text-xl flex-shrink-0" />
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  (14) 9 8814-6146
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-pink-500 text-xl flex-shrink-0" />
                <a
                  href="mailto:contato@thainaroberta.com"
                  className="hover:text-pink-400 transition-colors"
                >
                  contato@thainaroberta.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-500 text-xl flex-shrink-0 mt-1" />
                <span>
                  José Carlos Tirolo, 190
                  <br />
                  Bocaina - São Paulo
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais e Horários */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-pink-50">Siga-nos</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 p-3 rounded-full text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 p-3 rounded-full text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white mb-2">
                Horário de Atendimento
              </h5>
              <p className="text-gray-400 text-sm">
                Seg - Sex: 18:00 - 22:00
                <br />
                Sáb: 09:00 - 16:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Thainá Roberta Studio. Todos os
            direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/l.aleep/"
              target="_blank"
              className="hover:text-neutral-600"
            >
              L. Alexandre
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
