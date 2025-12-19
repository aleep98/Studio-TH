"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const slides = [
    {
      src: "/DesignDeSobrancelha-Henna.jpeg",
      title: "Design de Sobrancelhas",
      description:
        "Técnica com henna para realçar o formato natural das sobrancelhas.",
    },
    {
      src: "/EfeitoGatinho.jpeg",
      title: "Volume Soft Natural",
      description: "Efeito gatinho com leveza e naturalidade.",
    },
    {
      src: "/SoftNatural.jpeg",
      title: "Volume Soft Natural + Design",
      description:
        "Combinação perfeita entre cílios volumosos e sobrancelhas bem definidas.",
    },
    {
      src: "/VolumeBrasileiro.jpeg",
      title: "Volume Brasileiro",
      description: "Volume marcante com acabamento elegante e sofisticado.",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-10 min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-10"
    >
      <div className="container mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">
          Galeria
        </h2>
        <p className="text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
          Inspire-se com alguns dos nossos trabalhos e veja a transformação que
          podemos criar para o seu olhar.
        </p>
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper rounded-2xl shadow-2xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full min-h-[420px] md:h-[500px] rounded-2xl overflow-hidden bg-zinc-300/65 p-4 md:p-8">
                  <div className="relative w-full md:w-1/2 h-[500px] md:h-full rounded-xl overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover md:object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {slide.title}
                    </h3>

                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
