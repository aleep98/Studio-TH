"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
  const images = [
    '/DesignDeSobrancelha-Henna.jpeg',
    '/EfeitoGatinho.jpeg',
    '/SoftNatural.jpeg',
    '/VolumeBrasileiro.jpeg',
  ];

  return (
    <section id="gallery" className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-5xl font-bold text-center text-neutral-800 mb-4">
        Galeria
        </h2>
        <p className="text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
          Inspire-se com alguns dos nossos trabalhos e veja a transformação que podemos criar para o seu olhar.
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
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-80 md:h-[500px]">
                  <Image 
                    src={image} 
                    alt={`Trabalho realizado ${index + 1}`} 
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}