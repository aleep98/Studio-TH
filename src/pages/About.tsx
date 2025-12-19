import { Button } from "../_components/Button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-3 py-20 bg-white text-neutral-800 ">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center text-center gap-12 lg:gap-16 items-center justify-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="flex text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left items-center justify-center">
              Sobre Nós
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Bem-vinda ao nosso estúdio, um espaço dedicado a realçar a sua
              beleza natural e a elevar a sua autoestima. Acreditamos que cada
              mulher é única e merece sentir-se confiante e radiante todos os
              dias.
            </p>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Com anos de experiência e uma paixão por detalhes, nossa
              especialista Thainá Roberta utiliza as técnicas mais avançadas e
              produtos de alta qualidade para criar resultados impecáveis e
              personalizados. Do design de sobrancelhas à extensão de cílios,
              cada serviço é realizado com precisão, cuidado e um toque
              artístico.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Nosso compromisso é com a sua satisfação e bem-estar. Venha viver
              uma experiência de beleza transformadora.
            </p>
            <div className="text-center lg:text-left flex items-center justify-center">
              <Button variant="primary" size="large">
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="font-semibold">
                  Agende seu horário
                </a>
              </Button>
            </div>
          </div>
          {/* <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[5/3] relative">
              <Image
                src="/logo.png"
                alt="Thainá Roberta, especialista em cílios e sobrancelhas"
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
