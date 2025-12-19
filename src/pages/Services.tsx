import { Card } from '../_components/Card'; 
import { FaSpa, FaStar, FaHeart } from 'react-icons/fa'; 

export default function Services() {
  return (
    <>
      <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 text-neutral-800 pt-20">
        
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
          <h2 className="text-5xl font-bold text-neutral-800 mb-12">
            Nossos Serviços
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