import Image from 'next/image';

export default function Gallery() {
  // Substitua estes caminhos pelas imagens da sua pasta `public/gallery`
  const images = [
    '/DesignDeSobrancelha-Henna.jpeg',
    '/EfeitoGatinho.jpeg',
    '/SoftNatural.jpeg',
    '/VolumeBrasileiro.jpeg',
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-neutral-800 mb-4">
        Galeria
        </h2>
        <p className="text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
          Inspire-se com alguns dos nossos trabalhos e veja a transformação que podemos criar para o seu olhar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2x1 cursor-pointer">
              <Image src={image} alt={`Trabalho realizado ${index + 1}`} width={300} height={200} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}