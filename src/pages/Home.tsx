import { ImageWithFallback } from '../figma/ImageWithFallback';
import { cinzel, tangerine } from '../app/fonts';

export default function Home() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
        <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1674049406467-824ea37c7184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGJlYXV0eXxlbnwxfHx8fDE3NjYwNDc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beautiful eyelash extensions"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <span className='text-4xl mb-5 font-studio tracking-logo uppercase text-gray-400'>Studio</span>
                <h1 className="font-name font-normal text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Thainá Roberta</h1>
                <p id="subTitle" className="text-sm mb-8 text-gray-800 max-w-2xl">
                  Transformando a beleza com precisão e elegância.
                </p>
               
            </div>
      </section>
    </>
  );
}