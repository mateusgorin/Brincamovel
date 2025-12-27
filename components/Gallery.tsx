
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { 
    url: 'https://www.dropbox.com/scl/fi/nswik9dn03pvx0te4nkjl/WhatsApp-Image-2025-12-26-at-14.58.20.jpeg?rlkey=0ri7iqro8daghyk3x9xl3mcxb&st=wrs2eqnp&raw=1', 
    title: <>Pintura Artística 🎭</>,
    alt: "Criança com pintura artística facial feita em evento em Brasília",
    description: "Transformamos o sonho em cores com pinturas detalhadas e artísticas para todas as idades."
  },
  { 
    url: 'https://www.dropbox.com/scl/fi/9tf0n7yn7q0y32n45ht10/WhatsApp-Image-2025-12-26-at-14.56.22.jpeg?rlkey=e4tq6jkkqiinns6m6gvfyqq4o&st=t8n6e5r2&raw=1', 
    title: <>Carretinha ✨</>,
    alt: "Serviço de pintura facial e carretinha playground Brasília",
    description: "Nossa equipe de pintura facial integrada à diversão da carretinha, usando materiais de primeira linha."
  },
  { 
    url: 'https://www.dropbox.com/scl/fi/n3rw94nb7fnqsw2qmwj1d/WhatsApp-Image-2025-12-26-at-14.58.19.jpeg?rlkey=v6cnutdwc6hymmjud1ntcl9n9&st=24c6lyix&raw=1', 
    title: <>Arte e Cores 🎨</>,
    alt: "Arte em pintura facial infantil Distrito Federal",
    description: "Brilhos, pedrarias e muita criatividade para encantar os pequenos convidados."
  },
  { 
    url: 'https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg', 
    title: <>Carretinha Oficial <span className="inline-block animate-wiggle">🚐</span></>,
    alt: "Carretinha playground móvel estacionada em Brasília",
    description: "O playground móvel mais completo de Brasília pronto para estacionar no seu evento."
  },
  { 
    url: 'https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg', 
    title: <>Vista Lateral <span className="inline-block animate-wiggle">✨</span></>,
    alt: "Estrutura do playground móvel para festas infantis DF",
    description: "Estrutura compacta que ocupa apenas uma vaga de carro, facilitando a logística em qualquer local."
  },
  { 
    url: 'https://i.postimg.cc/bNP4fwkn/Screenshot-20251225-204725-Whats-App.jpg', 
    title: <>Mar de Bolinhas <span className="inline-block animate-bounce-gentle">🎈</span></>,
    alt: "Piscina de bolinhas aluguel Brasília - interior do playground",
    description: "Milhares de bolinhas coloridas e higienizadas para mergulhos de pura alegria."
  },
  { 
    url: 'https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg', 
    title: <>Espaço Interno <span className="inline-block animate-bounce-gentle">🏠</span></>,
    alt: "Área interna segura do playground móvel Brinca Móvel",
    description: "Ambiente seguro, com proteção em todas as quinas e visibilidade total para os pais."
  },
  { 
    url: 'https://i.postimg.cc/15Sb13wX/Screenshot-20251225-204842-Whats-App.jpg', 
    title: <>Detalhes Seguros <span className="inline-block animate-pulse">🛡️</span></>,
    alt: "Rede de proteção e segurança em playground infantil Brasília",
    description: "Redes de proteção reforçadas e materiais atóxicos garantem a segurança de todos."
  },
  { 
    url: 'https://i.postimg.cc/RVm2xZK0/Screenshot-20251225-204852-Whats-App.jpg', 
    title: <>Muita Alegria! <span className="inline-block animate-bounce-gentle">😄</span></>,
    alt: "Criança se divertindo na carretinha de brinquedos Brasília",
    description: "O sorriso no rosto das crianças é o que nos move todos os finais de semana."
  },
  { 
    url: 'https://i.postimg.cc/7Y4jrZ0b/Screenshot-20251225-204859-Whats-App.jpg', 
    title: <>Pura Diversão <span className="inline-block animate-spin-slow">🎠</span></>,
    alt: "Variedade de brinquedos móveis para aluguel em Brasília",
    description: "Várias atrações em um único lugar: pula-pula, escorregador, piscina de bolinhas e muito mais."
  },
  { 
    url: 'https://i.postimg.cc/FsvwXH3R/Screenshot-20251225-204907-Whats-App.jpg', 
    title: <>Festa Inesquecível <span className="inline-block animate-wiggle">🎊</span></>,
    alt: "Decoração e diversão com playground móvel no DF",
    description: "Fazemos do seu aniversário um momento mágico que ficará guardado na memória."
  },
  { 
    url: 'https://i.postimg.cc/CL09pxDW/Screenshot-20251225-204915-Whats-App.jpg', 
    title: <>Brasília em Festa <span className="inline-block animate-bounce-gentle">🏙️</span></>,
    alt: "Brinca Móvel Oficial atendendo festas em todo o Distrito Federal",
    description: "Atendemos todo o DF e entorno com pontualidade e excelência no serviço."
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

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section id="galeria" className="py-24 bg-white relative" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 uppercase tracking-tight">
          Nossa Galeria <span className="inline-block animate-bounce-gentle">📸</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">Arraste ou clique para ver mais! ✨</p>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => {
                setModalImageLoaded(false);
                setSelectedIndex(index);
              }}
              className="group relative aspect-square overflow-hidden rounded-3xl sm:rounded-[2.5rem] cursor-pointer shadow-md transition-all hover:shadow-2xl bg-pink-50 shimmer-bg border-2 md:border-4 border-white"
            >
              <img 
                src={img.url}
                alt={img.alt || "Foto Galeria Brinca Móvel"}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-110 opacity-0"
                loading="lazy"
                decoding="async"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
              />
              <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-white font-kids text-[10px] sm:text-base block text-center truncate uppercase tracking-widest">
                  {img.title}
                </span>
              </div>
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 animate-fadeIn transition-all duration-300 overflow-hidden"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          {/* Camada 1: Imagem Centralizada Absoluta */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12 pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {!modalImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                key={currentImage.url}
                src={currentImage.url} 
                alt={currentImage.alt || "Visualização ampliada"} 
                className={`max-w-full max-h-[70vh] sm:max-h-[85vh] object-contain transition-all duration-500 rounded-lg sm:rounded-2xl shadow-2xl pointer-events-auto ${modalImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onLoad={() => setModalImageLoaded(true)}
                onClick={(e) => e.stopPropagation()}
                decoding="async"
              />
            </div>
          </div>

          {/* Camada 2: Controles de Navegação (Desktop) */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-between px-10 pointer-events-none">
            {!isFirst && (
              <button 
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-full transition-all pointer-events-auto border border-white/5 shadow-2xl group"
                onClick={handlePrev}
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={36} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            )}
            <div className="flex-1"></div>
            {!isLast && (
              <button 
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-full transition-all pointer-events-auto border border-white/5 shadow-2xl group"
                onClick={handleNext}
                aria-label="Próxima imagem"
              >
                <ChevronRight size={36} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Camada 3: Header */}
          <div className="absolute top-0 left-0 w-full p-6 sm:p-10 flex justify-between items-center z-[130] pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm pointer-events-auto border border-white/10">
              {selectedIndex! + 1} / {images.length}
            </div>
            <button 
              className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all pointer-events-auto hover:scale-110 border border-white/10 shadow-xl"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              aria-label="Fechar galeria"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Camada 4: Legenda Inferior */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-24 pb-10 px-6 sm:px-12 text-center z-[130] pointer-events-none"
          >
            <div className="max-w-3xl mx-auto pointer-events-auto">
              <h3 className="text-xl sm:text-3xl font-kids font-bold text-white mb-2 tracking-wide drop-shadow-2xl">
                {currentImage.title}
              </h3>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed font-medium drop-shadow-xl px-2">
                {currentImage.description}
              </p>
            </div>
          </div>

          {/* Zonas de Toque Mobile (Invisíveis) */}
          <div className="absolute inset-0 flex lg:hidden pointer-events-none z-[120]">
            <div className="w-1/3 h-full pointer-events-auto cursor-pointer" onClick={handlePrev}></div>
            <div className="w-1/3 h-full pointer-events-auto cursor-pointer" onClick={() => setSelectedIndex(null)}></div>
            <div className="w-1/3 h-full pointer-events-auto cursor-pointer" onClick={handleNext}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
