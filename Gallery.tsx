
import React from 'react';

const images = [
  { url: 'https://i.postimg.cc/bNP4fwkn/Screenshot-20251225-204725-Whats-App.jpg', title: 'Carretinha Oficial 🚐' },
  { url: 'https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg', title: 'Vista Lateral ✨' },
  { url: 'https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg', title: 'Mar de Bolinhas 🎈' },
  { url: 'https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg', title: 'Espaço Interno 🏠' },
  { url: 'https://i.postimg.cc/15Sb13wX/Screenshot-20251225-204842-Whats-App.jpg', title: 'Detalhes Seguros 🛡️' },
  { url: 'https://i.postimg.cc/RVm2xZK0/Screenshot-20251225-204852-Whats-App.jpg', title: 'Muita Alegria! 😄' },
  { url: 'https://i.postimg.cc/7Y4jrZ0b/Screenshot-20251225-204859-Whats-App.jpg', title: 'Pura Diversão 🎠' },
  { url: 'https://i.postimg.cc/FsvwXH3R/Screenshot-20251225-204907-Whats-App.jpg', title: 'Festa Inesquecível 🎊' },
  { url: 'https://i.postimg.cc/CL09pxDW/Screenshot-20251225-204915-Whats-App.jpg', title: 'Brasília em Festa 🏙️' },
];

const Gallery: React.FC = () => {
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria da Carretinha 📸</h2>
        <p className="text-xl text-gray-600 mb-12">Confira cada cantinho do nosso playground móvel!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={index}
              className="group relative aspect-video overflow-hidden rounded-[2.5rem] cursor-pointer shadow-lg border-4 border-pink-50 transition-all hover:shadow-2xl bg-pink-50/50"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lazy-image"
                loading="lazy"
                width="640"
                height="360"
                decoding="async"
                onLoad={handleLoad}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-kids text-2xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform px-4 text-center">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
