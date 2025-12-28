import React from 'react';
import { Star, Sparkles, MapPin, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const logoUrl = "https://i.postimg.cc/FKkTJM38/brincamovel-oficial-20251225-0003.jpg";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="absolute top-20 left-10 text-yellow-300 opacity-50 animate-bounce hidden md:block">
        <Star size={48} fill="currentColor" className="animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-10 text-yellow-300 opacity-50 animate-bounce hidden md:block">
        <Star size={48} fill="currentColor" className="animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-300 opacity-50 animate-pulse hidden md:block">
        <Sparkles size={48} className="animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-6 font-kids shadow-sm hover:scale-105 transition-transform">
              <MapPin size={18} className="animate-bounce-gentle" />
              <span>O mais raro de Brasília! <span className="inline-block animate-wiggle">🚐</span></span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Playground móvel <br />
              <span className="text-pink-500">e Pintura <span className="inline-block animate-wiggle">🎨</span></span> <br />
              <span className="text-orange-500 text-3xl md:text-5xl block mt-2">Diversão completa para festas & eventos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transforme seu evento com uma <span className="font-bold text-pink-600">experiência única</span> e encantadora. A carretinha que é um verdadeiro parque de diversões sobre rodas!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="bg-pink-500 hover:bg-pink-600 text-white text-xl font-kids px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2 group"
              >
                <span>Pedir Orçamento</span>
                <Sparkles size={20} className="group-hover:animate-spin-slow" />
              </a>
              <a 
                href="#servicos"
                onClick={(e) => handleNavClick(e, '#servicos')}
                className="bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-500 text-xl font-kids px-10 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center space-x-2 group"
              >
                <Palette size={20} className="group-hover:animate-wiggle" />
                <span>Nossas Atrações</span>
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative w-full flex justify-center">
            <div className="relative z-10 w-full max-w-[720px] aspect-square transition-all duration-500 hover:scale-[1.02] animate-bounce-gentle" style={{ animationDuration: '3.5s' }}>
              <img 
                src={logoUrl} 
                alt="Brinca Móvel Oficial - Playground Móvel e Piscina de Bolinhas para Festas em Brasília DF"
                fetchpriority="high"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain transition-all duration-500 scale-[1.15]"
                width="800"
                height="800"
              />
            </div>
            <div className="absolute -inset-8 bg-yellow-200 blob-shape -z-10 animate-pulse opacity-30" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,112.49,122.42,113.58,181.19,103.11,250.41,90.84,281.94,77.21,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;