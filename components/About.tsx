
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600 uppercase tracking-tight">CARRETINHA PLAYGROUND <span className="inline-block animate-pulse">✨</span></h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-orange-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-orange-500 p-3 rounded-2xl text-white shrink-0">
                  <Maximize2 size={24} className="group-hover:animate-bounce-gentle" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-orange-700">Compacta e Versátil</h4>
                  <p className="text-base">Ocupa apenas uma faixa de estacionamento, sem atrapalhar o trânsito. Ideal para qualquer espaço.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-pink-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-pink-500 p-3 rounded-2xl text-white shrink-0">
                  <CheckCircle size={24} className="group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-pink-700">Conforto Térmico</h4>
                  <p className="text-base">Telhado de PVC térmico que não esquenta, mantendo a temperatura agradável mesmo no sol forte de Brasília.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-blue-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-blue-500 p-3 rounded-2xl text-white shrink-0">
                  <Heart size={24} className="group-hover:animate-beat" />
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
              <div className="animate-bounce-gentle" style={{ animationDuration: '4s', animationDelay: '0s' }}>
                <div className="rounded-[2rem] overflow-hidden shadow-lg border-4 border-white rotate-3 h-48 sm:h-64 bg-orange-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src="https://i.postimg.cc/pXv3MLz5/Screenshot-20251225-204830-Whats-App.jpg" 
                    alt="Interior do Playground Móvel em Brasília com piscina de bolinhas e escorregador" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-8 animate-bounce-gentle" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-3 h-48 sm:h-64 overflow-hidden bg-pink-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src="https://i.postimg.cc/CL09pxkf/Screenshot-20251225-204814-Whats-App.jpg" 
                    alt="Aluguel de piscina de bolinhas DF para festas infantis - Brinca Móvel" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="animate-bounce-gentle" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-6 h-48 sm:h-64 overflow-hidden bg-blue-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src="https://i.postimg.cc/kXyzJPvg/Screenshot-20251225-204745-Whats-App.jpg" 
                    alt="Carretinha de diversão infantil em Brasília para eventos externos" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-4 animate-bounce-gentle" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white rotate-6 h-48 sm:h-64 overflow-hidden bg-yellow-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src="https://i.postimg.cc/Vk2RVNXb/Whats-App-Image-2025-12-26-at-07-07-36.jpg" 
                    alt="Brinca Móvel Oficial estacionada em evento no Distrito Federal" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
