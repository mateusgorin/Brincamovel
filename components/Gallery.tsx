
import React, { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { url: 'https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg', title: <>Carretinha Oficial <span className="inline-block animate-wiggle">🚐</span></> },
  { url: 'https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg', title: <>Vista Lateral <span className="inline-block animate-wiggle">✨</span></> },
  { url: 'https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg', title: <>Mar de Bolinhas <span className="inline-block animate-bounce-gentle">🎈</span></> },
  { url: 'https://i.postimg.cc/bNP4fwkn/Screenshot-20251225-204725-Whats-App.jpg', title: <>Espaço Interno <span className="inline-block animate-bounce-gentle">🏠</span></> },
  { url: 'https://i.postimg.cc/15Sb13wX/Screenshot-20251225-204842-Whats-App.jpg', title: <>Detalhes Seguros <span className="inline-block animate-pulse">🛡️</span></> },
  { url: 'https://i.postimg.cc/RVm2xZK0/Screenshot-20251225-204852-Whats-App.jpg', title: <>Muita Alegria! <span className="inline-block animate-bounce-gentle">😄</span></> },
  { url: 'https://i.postimg.cc/7Y4jrZ0b/Screenshot-20251225-204859-Whats-App.jpg', title: <>Pura Diversão <span className="inline-block animate-spin-slow">🎠</span></> },
  { url: 'https://i.postimg.cc/FsvwXH3R/Screenshot-20251225-204907-Whats-App.jpg', title: <>Festa Inesquecível <span className="inline-block animate-wiggle">🎊</span></> },
  { url: 'https://i.postimg.cc/CL09pxDW/Screenshot-20251225-204915-Whats-App.jpg', title: <>Brasília em Festa <span className="inline-block animate-bounce-gentle">🏙️</span></> },
];

const Gallery: React.FC = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

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
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Fechar com a tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria da Carretinha <span className="inline-block animate-bounce-gentle">📸</span></h2>
        <p className="text-xl text-gray-600 mb-12">Confira cada cantinho do nosso playground móvel! (Clique para ampliar)</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-video overflow-hidden rounded-[2.5rem] cursor-pointer shadow-lg border-4 border-pink-50 transition-all hover:shadow-2xl bg-pink-50/50 hover:border-pink-200"
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
                onLoad={handleLoad}
              />
              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/90 p-3 rounded-full text-pink-500 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={32} />
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-kids text-2xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform px-4 text-center">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
          >
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={selectedImage.url} 
                alt="Zoom" 
                className="max-h-[80vh] w-auto object-contain bg-black"
              />
            </div>
            
            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-kids font-bold tracking-wide">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
