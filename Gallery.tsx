import React, { useEffect, useState, useCallback, useRef } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const images = [
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776108714/WhatsApp_Image_2025-12-26_at_14.58.20_u8hmpq.jpg', 
    title: <>Pintura Artística 🎭</>,
    alt: "Criança com pintura artística facial feita em evento em Brasília",
    description: "Transformamos o sonho em cores with pinturas detalhadas e artísticas para todas as idades."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776108714/WhatsApp_Image_2025-12-26_at_14.56.22_mzicjt.jpg', 
    title: <>Carretinha ⭐</>,
    alt: "Serviço de pintura facial e carretinha playground Brasília",
    description: "Nossa equipe de pintura facial integrada à diversão da carretinha, usando materiais de primeira linha."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776108714/WhatsApp_Image_2025-12-26_at_14.58.19_rhgfro.jpg', 
    title: <>Arte e Cores 🎨</>,
    alt: "Arte em pintura facial infantil Distrito Federal",
    description: "Brilhos, pedrarias e muita criatividade para encantar os pequenos convidados."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103172/Screenshot-20251225-204830-Whats-App_x1gsvz.jpg', 
    title: <>Carretinha Oficial <span className="inline-block animate-wiggle">🚐</span></>,
    alt: "Carretinha playground móvel estacionada em Brasília",
    description: "O playground móvel mais completo de Brasília pronto para estacionar no seu evento."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103174/Screenshot-20251225-204745-Whats-App_xd4v1u.jpg', 
    title: <>Vista Lateral <span className="inline-block animate-wiggle">⭐</span></>,
    alt: "Estrutura do playground móvel para festas infantis DF",
    description: "Estrutura compacta que ocupa apenas uma vaga de carro, facilitando a logística em qualquer local."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103173/Screenshot-20251225-204725-Whats-App_pv5yaq.jpg', 
    title: <>Mar de Bolinhas <span className="inline-block animate-bounce-gentle">🎈</span></>,
    alt: "Piscina de bolinhas aluguel Brasília - interior do playground",
    description: "Milhares de bolinhas coloridas e higienizadas para mergulhos de pura alegria."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103173/Screenshot-20251225-204814-Whats-App_chvgnr.jpg', 
    title: <>Espaço Interno <span className="inline-block animate-bounce-gentle">🏠</span></>,
    alt: "Área interna segura do playground móvel Brinca Móvel",
    description: "Ambiente seguro, com proteção em todas as quinas e visibilidade total para os pais."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103174/Screenshot-20251225-204842-Whats-App_mr2mwg.jpg', 
    title: <>Detalhes Seguros <span className="inline-block animate-pulse">🛡️</span></>,
    alt: "Rede de proteção e segurança em playground infantil Brasília",
    description: "Redes de proteção reforçadas e materiais atóxicos garantem a segurança de todos."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103174/Screenshot-20251225-204852-Whats-App_y3tau1.jpg', 
    title: <>Muita Alegria! <span className="inline-block animate-bounce-gentle">😄</span></>,
    alt: "Criança se divertindo na carretinha de brinquedos Brasília",
    description: "O sorriso no rosto das crianças é o que nos move todos os finais de semana."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103174/Screenshot-20251225-204859-Whats-App_peyabl.jpg', 
    title: <>Pura Diversão <span className="inline-block animate-spin-slow">🎠</span></>,
    alt: "Variedade de brinquedos móveis para aluguel em Brasília",
    description: "Várias atrações em um único lugar: pula-pula, escorregador, piscina de bolinhas e muito mais."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103174/Screenshot-20251225-204907-Whats-App_voz2eu.jpg', 
    title: <>Festa Inesquecível <span className="inline-block animate-wiggle">🎊</span></>,
    alt: "Decoração e diversão com playground móvel no DF",
    description: "Fazemos do seu aniversário um momento mágico que ficará guardado na memória."
  },
  { 
    url: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103175/Screenshot-20251225-204915-Whats-App_kfolmz.jpg', 
    title: <>Brasília em Festa <span className="inline-block animate-bounce-gentle">🏙️</span></>,
    alt: "Brinca Móvel Oficial atendendo festas em todo o Distrito Federal",
    description: "Atendemos todo o DF e entorno with pontualidade e excelência no serviço."
  },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === images.length - 1;

  const handleNext = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && !isLast) {
      setModalImageLoaded(false);
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, isLast]);

  const handlePrev = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && !isFirst) {
      setModalImageLoaded(false);
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex, isFirst]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (diff > minSwipeDistance) handleNext();
    else if (diff < -minSwipeDistance) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section id="galeria" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-800 uppercase tracking-tight">
            Nossa Galeria <span className="inline-block animate-bounce-gentle">📸</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-12">Arraste ou clique para ver mais! ⭐</p>
        </motion.div>

        {/* Subseção Dia & Noite */}
        <div className="mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800 font-kids"
          >
            Dia & Noite: A festa não para quando o sol se põe 🌙
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Card Dia */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg border-2 md:border-4 border-white bg-gradient-to-br from-yellow-50 to-orange-50"
            >
              <img 
                src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776086833/Picsart_26-04-13_10-25-19-662_xlw90z.jpg" 
                alt="Festa durante o dia com a Brinca Móvel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="bg-yellow-400 text-yellow-900 font-kids px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-lg shadow-lg border-2 border-white">
                  ☀️ Durante o Dia
                </span>
              </div>
            </motion.div>

            {/* Card Noite (LED) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg border-2 md:border-4 border-[#7C3AED] bg-[#1E1B4B] mt-4 md:mt-0"
            >
              <img 
                src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776086259/IMG-20260413-WA0035_gozjhp.jpg" 
                alt="Festa à noite com iluminação LED da Brinca Móvel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="bg-[#1E1B4B] text-white font-kids px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-lg shadow-[0_0_15px_rgba(124,58,237,0.6)] border-2 border-[#7C3AED]">
                  🌙 Com Iluminação LED
                </span>
              </div>
              <div className="absolute inset-0 bg-indigo-900/20 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => {
                setModalImageLoaded(false);
                setSelectedIndex(index);
              }}
              className="group relative aspect-square sm:aspect-video overflow-hidden rounded-2xl sm:rounded-[2.5rem] cursor-pointer shadow-md transition-all hover:shadow-2xl bg-pink-50 shimmer-bg border-2 md:border-4 border-white"
            >
              <img 
                src={img.url}
                alt={img.alt || "Foto Galeria Brinca Móvel"}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-0"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
                fetchPriority="low"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
              />
              <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-white font-kids text-[10px] sm:text-sm md:text-base block text-center truncate uppercase tracking-widest">
                  {img.title}
                </span>
              </div>
              <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
                <div className="bg-white/80 backdrop-blur-sm p-1 md:p-1.5 rounded-full text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {currentImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col bg-gray-900/95 backdrop-blur-xl animate-fadeIn transition-all duration-300 overflow-hidden"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full p-4 sm:p-6 md:p-8 flex justify-between items-center z-[110] pointer-events-none sm:absolute sm:top-0 sm:left-0 mt-2 sm:mt-0">
            <div className="bg-white/10 backdrop-blur-md text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full font-bold text-xs sm:text-sm pointer-events-auto border border-white/20 shadow-lg">
              {selectedIndex! + 1} / {images.length}
            </div>
            <button 
              className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all pointer-events-auto hover:scale-110 active:scale-95 border border-white/20 shadow-lg"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          <div 
            className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-0"
            onClick={(e) => e.stopPropagation()}
          >
            {!isFirst && (
              <button 
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-5 rounded-full transition-all z-[120] hidden lg:flex items-center justify-center border border-white/10 shadow-xl"
                onClick={handlePrev}
              >
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>
            )}

            {!isLast && (
              <button 
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-5 rounded-full transition-all z-[120] hidden lg:flex items-center justify-center border border-white/10 shadow-xl"
                onClick={handleNext}
              >
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>
            )}

            <div className="relative w-full h-full flex items-center justify-center py-4 sm:py-0">
              {!modalImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                key={currentImage.url}
                src={currentImage.url} 
                alt={currentImage.alt || "Visualização ampliada"} 
                className={`max-w-full max-h-[55vh] sm:max-h-[85vh] object-contain transition-all duration-500 rounded-xl md:rounded-2xl shadow-2xl select-none ${modalImageLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
                onLoad={() => setModalImageLoaded(true)}
                decoding="async"
              />
            </div>

            <div className="absolute inset-0 flex lg:hidden pointer-events-none">
              <div className="w-1/4 h-full pointer-events-auto" onClick={handlePrev}></div>
              <div className="w-2/4 h-full pointer-events-auto" onClick={() => setSelectedIndex(null)}></div>
              <div className="w-1/4 h-full pointer-events-auto" onClick={handleNext}></div>
            </div>
          </div>
          
          <div 
            className="w-full bg-gradient-to-t from-gray-900 to-transparent pt-8 md:pt-12 pb-6 md:pb-8 px-4 sm:px-12 text-center sm:absolute sm:bottom-0 sm:left-0 z-[110] pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-3xl mx-auto pointer-events-auto">
              <h3 className="text-base sm:text-2xl md:text-3xl font-kids font-bold text-white mb-1 md:mb-2 tracking-wide drop-shadow-xl">
                {currentImage.title}
              </h3>
              <p className="text-[11px] sm:text-sm md:text-lg text-gray-300 leading-relaxed font-medium drop-shadow-md px-2">
                {currentImage.description}
              </p>
              <div className="h-4 sm:hidden"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;