import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; 
  imageSrc?: string; 
}

export const Card: React.FC<CardProps> = ({ title, description, icon, imageSrc }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 m-4 max-w-sm text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md" />
      )}
      {icon && <div className="text-4xl text-pink-600 mb-4 mx-auto">{icon}</div>}
      <h3 className="text-2xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};