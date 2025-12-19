import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../_components/Card'; // Importa o novo componente Card
import { FaSpa, FaStar, FaHeart } from 'react-icons/fa'; // Exemplo de ícones, você pode instalar 'react-icons'
import { Header } from '../_components/Header';

export default function Services() {
  return (
    <>
      <Header />
      <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 text-neutral-800 pt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1674049406467-824ea37c7184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGJlYXR5fGVufDF8fHx8MTc2NjA0NzUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beautiful eyelash extensions"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
          <h2 className="text-5xl font-bold text-neutral-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Extensão de Cílios"
              description="Realce seu olhar com técnicas avançadas de extensão de cílios, personalizadas para você."
              icon={<FaSpa />}
            />
            <Card
              title="Design de Sobrancelhas"
              description="Sobrancelhas perfeitamente desenhadas para harmonizar com seu rosto e expressar sua beleza."
              icon={<FaStar />}
            />
            <Card
              title="Lash Lifting"
              description="Curvatura e volume naturais para seus cílios, com um efeito duradouro e sem manutenção diária."
              icon={<FaHeart />}
            />
          </div>
        </div>
      </section>
    </>
  );
}