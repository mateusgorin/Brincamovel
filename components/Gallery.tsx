
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ZoomIn, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { 
    url: 'https://www.dropbox.com/scl/fi/nswik9dn03pvx0te4nkjl/WhatsApp-Image-2025-12-26-at-14.58.20.jpeg?rlkey=0ri7iqro8daghyk3x9xl3mcxb&st=wrs2eqnp&raw=1', 
    title: <>Pintura Artística 🎭</>,
    description: "Transformamos o sonho em cores com pinturas detalhadas e artísticas para todas as idades."
  },
  { 
    url: 'https://www.dropbox.com/scl/fi/9tf0n7yn7q0y32n45ht10/WhatsApp-Image-2025-12-26-at-14.56.22.jpeg?rlkey=e4tq6jkkqiinns6m6gvfyqq4o&st=t8n6e5r2&raw=1', 
    title: <>Carretinha ✨</>,
    description: "Nossa equipe de pintura facial integrada à diversão da carretinha, usando materiais de primeira linha."
  },
  { 
    url: 'https://www.dropbox.com/scl/fi/n3rw94nb7fnqsw2qmwj1d/WhatsApp-Image-2025-12-26-at-14.58.19.jpeg?rlkey=v6cnutdwc6hymmjud1ntcl9n9&st=24c6lyix&raw=1', 
    title: <>Arte e Cores 🎨</>,
    description: "Brilhos, pedrarias e muita criatividade para encantar os pequenos convidados."
  },
  { 
    url: 'https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg', 
    title: <>Carretinha Oficial <span className="inline-block animate-wiggle">🚐</span></>,
    description: "O playground móvel mais completo de Brasília pronto para estacionar no seu evento."
  },
  { 
    url: 'https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg', 
    title: <>Vista Lateral <span className="inline-block animate-wiggle">✨</span></>,
    description: "Estrutura compacta que ocupa apenas uma vaga de carro, facilitando a logística em qualquer local."
  },
  { 
    url: 'https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg', 
    title: <>Mar de Bolinhas <span className="inline-block animate-bounce-gentle">🎈</span></>,
    description: "Milhares de bolinhas coloridas e higienizadas para mergulhos de pura alegria."
  },
  { 
    url: 'https://i.postimg.cc/bNP4fwkn/Screenshot-20251225-204725-Whats-App.jpg', 
    title: <>Espaço Interno <span className="inline-block animate-bounce-gentle">🏠</span></>,
    description: "Ambiente seguro, com proteção em todas as quinas e visibilidade total para os pais."
  },
  { 
    url: 'https://i.postimg.cc/15Sb13wX/Screenshot-20251225-204842-Whats-App.jpg', 
    title: <>Detalhes Seguros <span className="inline-block animate-pulse">🛡️</span></>,
    description: "Redes de proteção reforçadas e materiais atóxicos garantem a segurança de todos."
  },
  { 
    url: 'https://i.postimg.cc/RVm2xZK0/Screenshot-20251225-204852-Whats-App.jpg', 
    title: <>Muita Alegria! <span className="inline-block animate-bounce-gentle">😄</span></>,
    description: "O sorriso no rosto das crianças é o que nos move todos os finais de semana."
  },
  { 
    url: 'https://i.postimg.cc/7Y4jrZ0b/Screenshot-20251225-204859-Whats-App.jpg', 
    title: <>Pura Diversão <span className="inline-block animate-spin-slow">🎠</span></>,
    description: "Várias atrações em um único lugar: pula-pula, escorregador, piscina de bolinhas e muito mais."
  },
  { 
    url: 'https://i.postimg.cc/FsvwXH3R/Screenshot-20251225-204907-Whats-App.jpg', 
    title: <>Festa Inesquecível <span className="inline-block animate-wiggle">🎊</span></>,
    description: "Fazemos do seu aniversário um momento mágico que ficará guardado na memória."
  },
  { 
    url: 'https://i.postimg.cc/CL09pxDW/Screenshot-20251225-204915-Whats-App.jpg', 
    title: <>Brasília em Festa <span className="inline-block animate-bounce-gentle">🏙️</span></>,
    description: "Atendemos todo o DF e entorno com pontualidade e excelência no serviço."
  },
];

const Gallery: React.FC = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Galeria da Carretinha <span className="inline-block animate-bounce-gentle">📸</span></h2>
        <p className="text-xl text-gray-600 mb-12">Navegue pelas fotos e conheça cada detalhe! ✨</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-video overflow-hidden rounded-[2.5rem] cursor-pointer shadow-lg border-4 border-pink-50 transition-all hover:shadow-2xl bg-pink-50/50 hover:border-pink-200 shimmer-bg"
            >
              <img 
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                data-src={img.url}
                alt="Carretinha"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lazy-image"
                width="640"
                height="360"
                decoding="async"
                onLoad={handleLoad}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/95 p-4 rounded-full text-pink-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center space-x-2">
                    <ZoomIn size={24} />
                    <span className="font-bold font-kids">Ver Detalhes</span>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-kids text-2xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform px-4 text-center">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn transition-all"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botão Fechar */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full transition-all z-20 hover:scale-110 active:scale-90"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Botão Anterior */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full transition-all z-20 hover:scale-110 active:scale-90 hidden sm:block"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Botão Próximo */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full transition-all z-20 hover:scale-110 active:scale-90 hidden sm:block"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contador de Imagens */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-pink-500/80 text-white px-4 py-1 rounded-full font-bold text-sm z-20">
              {selectedIndex! + 1} / {images.length}
            </div>

            <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden bg-gray-100 shimmer-bg group/modal">
              <img 
                key={currentImage.url} // Força a atualização da animação ao trocar de imagem
                src={currentImage.url} 
                alt="Zoom" 
                className="w-full h-full object-contain animate-fadeIn"
                decoding="async"
              />
              
              {/* Controles Mobile/Touch */}
              <div className="absolute inset-0 flex sm:hidden">
                <div className="w-1/2 h-full" onClick={handlePrev}></div>
                <div className="w-1/2 h-full" onClick={handleNext}></div>
              </div>
            </div>
            
            <div className="w-full p-8 md:p-10 text-center bg-white">
              <div className="flex flex-col items-center gap-2 mb-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-pink-100 p-2 rounded-xl text-pink-500">
                    <Info size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-kids font-bold text-gray-800">
                    {currentImage.title}
                  </h3>
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                {currentImage.description}
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={handlePrev}
                  className="sm:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-kids text-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Fechar Galeria
                </button>
                <button 
                  onClick={handleNext}
                  className="sm:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
