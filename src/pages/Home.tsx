import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../_components/Button';
import { cinzel, tangerine } from '../app/fonts';

export default function Home() {
  return (
   <section className={`${cinzel.variable} ${tangerine.variable}`}>
    <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1674049406467-824ea37c7184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGJlYXV0eXxlbnwxfHx8fDE3NjYwNDc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful eyelash extensions"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <span className='text-4xl mb-5 font-studio tracking-logo uppercase text-gray-400'>Studio</span>
            <h1 className="font-name font-normal text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Thainá Roberta</h1>
            <p className="text-xl mb-8 text-white max-w-2xl">
              Transformando a beleza com precisão e elegância.
            </p>
            <Button variant="primary" size="large">
              Agendar
            </Button>
        </div>
   </section>
      
  );
}