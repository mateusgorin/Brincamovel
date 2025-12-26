
import React from 'react';
import { Heart, CheckCircle, Maximize2 } from 'lucide-react';

const About: React.FC = () => {
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <section id="sobre" className="py-24 bg-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600 uppercase tracking-tight">CARRETINHA PLAYGROUND ✨</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-orange-100 shadow-sm transition-transform hover:scale-[1.02]">
                <div className="bg-orange-500 p-3 rounded-2xl text-white shrink-0">
                  <Maximize2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-orange-700">Compacta e Versátil</h4>
                  <p className="text-base">Ocupa apenas uma faixa de estacionamento, sem atrapalhar o trânsito. Ideal para qualquer espaço.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-pink-100 shadow-sm transition-transform hover:scale-[1.02]">
                <div className="bg-pink-500 p-3 rounded-2xl text-white shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-pink-700">Conforto Térmico</h4>
                  <p className="text-base">Telhado de PVC térmico que não esquenta, mantendo a temperatura agradável mesmo no sol forte de Brasília.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-blue-100 shadow-sm transition-transform hover:scale-[1.02]">
                <div className="bg-blue-500 p-3 rounded-2xl text-white shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-blue-700">Diversão Segura</h4>
                  <p className="text-base">Piscina de bolinhas, escorregador, cama elástica e monitores treinados para total tranquilidade.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-lg border-4 border-white rotate-3 h-48 sm:h-64 bg-orange-200 relative">
                <img 
                  src="https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg" 
                  alt="Interior Carretinha" 
                  className="w-full h-full object-cover lazy-image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  onLoad={handleLoad}
                />
              </div>
              <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-3 mt-8 h-48 sm:h-64 overflow-hidden bg-pink-200 relative">
                <img 
                  src="https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg" 
                  alt="Piscina de Bolinhas" 
                  className="w-full h-full object-cover lazy-image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  onLoad={handleLoad}
                />
              </div>
              <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-6 h-48 sm:h-64 overflow-hidden bg-blue-200 relative">
                <img 
                  src="https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg" 
                  alt="Carretinha Lateral" 
                  className="w-full h-full object-cover lazy-image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  onLoad={handleLoad}
                />
              </div>
              <div className="rounded-[2rem] shadow-lg border-4 border-white rotate-6 mt-4 h-48 sm:h-64 overflow-hidden bg-yellow-200 relative">
                <img 
                  src="https://i.postimg.cc/FKkTJM38/brincamovel-oficial-20251225-0003.jpg" 
                  alt="Carretinha Brinca Móvel" 
                  className="w-full h-full object-cover lazy-image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  onLoad={handleLoad}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
