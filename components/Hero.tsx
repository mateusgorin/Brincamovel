import React, { useState, useEffect } from 'react';
import { Star, MapPin, Palette, Moon, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const logoUrl = "https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-goro_nosw9r.png";

  useEffect(() => {
    const img = new Image();
    img.src = logoUrl;
    if (img.complete) {
      setImageLoaded(true);
    }
  }, [logoUrl]);

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
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="absolute top-20 left-10 text-yellow-300 opacity-50 animate-bounce hidden md:block">
        <Star size={48} fill="currentColor" className="animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-10 text-yellow-300 opacity-50 animate-bounce hidden md:block">
        <Star size={48} fill="currentColor" className="animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-300 opacity-50 animate-pulse hidden md:block">
        <Star size={48} className="animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 mb-4 md:mb-6">
              <div className="inline-flex items-center space-x-1.5 bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full font-kids shadow-sm hover:scale-105 transition-transform">
                <Moon size={14} className="animate-wiggle md:w-[15px] md:h-[15px]" />
                <span className="text-xs md:text-sm whitespace-nowrap">Diversão Dia & Noite</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full font-kids shadow-sm hover:scale-105 transition-transform">
                <Star size={14} className="md:w-[15px] md:h-[15px]" />
                <span className="text-xs md:text-sm whitespace-nowrap">O mais raro de Brasília!</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Aluguel de <br className="hidden sm:block" />
              <span className="text-pink-500">Playground Móvel <span className="inline-block animate-wiggle">🎨</span></span> <br className="hidden sm:block" />
              <span className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-1 md:mt-2">para Festa Infantil em Brasília DF</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transforme seu evento com uma <span className="font-bold text-pink-600">experiência única</span> e encantadora. A carretinha que é um verdadeiro parque de diversões sobre rodas!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 md:mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 text-xs sm:text-sm font-medium">A partir de</span>
                <span className="text-pink-500 font-kids text-2xl sm:text-3xl md:text-4xl font-bold">R$ 690</span>
              </div>
              <span className="text-gray-300 text-xl md:text-2xl hidden sm:inline">·</span>
              <span className="text-gray-500 text-sm sm:text-base md:text-lg">4 horas de diversão completa</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="w-full sm:w-auto text-center justify-center bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-kids px-6 md:px-8 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2 group"
              >
                <span>Pedir Orçamento</span>
                <Star size={20} className="group-hover:animate-spin-slow" />
              </a>
              <a 
                href="#servicos"
                onClick={(e) => handleNavClick(e, '#servicos')}
                className="w-full sm:w-auto text-center justify-center bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-500 text-lg md:text-xl font-kids px-6 md:px-8 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center space-x-2 group"
              >
                <Palette size={20} className="group-hover:animate-wiggle" />
                <span>Nossas Atrações</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative w-full flex justify-center mt-[15px] md:mt-8 lg:mt-0"
          >
            <div className={`relative z-10 w-[230px] h-auto sm:w-full sm:max-w-[320px] md:max-w-[420px] aspect-auto sm:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-[8px] md:border-[12px] border-white transition-all duration-500 hover:scale-[1.02] bg-white p-0 ${!imageLoaded ? 'shimmer-bg' : ''} animate-bounce-gentle`} style={{ animationDuration: '3.5s' }}>
              <img 
                src={logoUrl} 
                alt="Brinca Móvel Oficial - Playground Móvel e Piscina de Bolinhas para Festas em Brasília DF"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className={`w-full h-auto sm:h-full object-contain transition-all duration-500 sm:scale-[1.15] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                width="420"
                height="420"
              />
            </div>
            <div className="absolute -inset-4 md:-inset-8 bg-yellow-200 blob-shape -z-10 animate-pulse opacity-30" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,112.49,122.42,113.58,181.19,103.11,250.41,90.84,281.94,77.21,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;