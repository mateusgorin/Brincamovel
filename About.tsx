import React from 'react';
import { Heart, CheckCircle, Maximize2, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <section id="sobre" className="py-16 md:py-24 bg-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-orange-600 uppercase tracking-tight text-center md:text-left">CARRETINHA PLAYGROUND <span className="inline-block animate-pulse">⭐</span></h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6 text-base md:text-lg text-gray-700">
              <div className="flex items-start space-x-3 md:space-x-4 p-4 bg-white/50 rounded-3xl border border-orange-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-orange-500 p-2 md:p-3 rounded-2xl text-white shrink-0">
                  <Maximize2 size={24} className="group-hover:animate-bounce-gentle w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-orange-700">Compacta e Versátil</h4>
                  <p className="text-sm md:text-base">Ocupa apenas uma faixa de estacionamento, sem atrapalhar o trânsito. Ideal para qualquer espaço.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4 p-4 bg-white/50 rounded-3xl border border-pink-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-pink-500 p-2 md:p-3 rounded-2xl text-white shrink-0">
                  <CheckCircle size={24} className="group-hover:animate-pulse w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-pink-700">Conforto Térmico</h4>
                  <p className="text-sm md:text-base">Telhado de PVC térmico que não esquenta, mantendo a temperatura agradável mesmo no sol forte de Brasília.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4 p-4 bg-white/50 rounded-3xl border border-blue-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-blue-500 p-2 md:p-3 rounded-2xl text-white shrink-0">
                  <Heart size={24} className="group-hover:animate-beat w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-blue-700">Diversão Segura</h4>
                  <p className="text-sm md:text-base">Piscina de bolinhas, escorregador, cama elástica e monitores treinados para total tranquilidade.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-4 bg-white/50 rounded-3xl border border-yellow-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-yellow-500 p-2 md:p-3 rounded-2xl text-white shrink-0">
                  <Zap size={24} className="group-hover:animate-pulse w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-yellow-700">Iluminação LED de Festa</h4>
                  <p className="text-sm md:text-base">Equipada com LEDs vibrantes para garantir a diversão até o anoitecer. Sua festa não para quando o sol se põe!</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 order-1 md:order-2 w-full"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="animate-bounce-gentle" style={{ animationDuration: '4s', animationDelay: '0s' }}>
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border-2 md:border-4 border-white rotate-3 h-32 sm:h-48 md:h-64 bg-orange-100 relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-result-paste-file_uzjozn.jpg" 
                    alt="Interior do Playground Móvel em Brasília" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-4 md:mt-8 animate-bounce-gentle" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="rounded-[1.5rem] md:rounded-[2rem] shadow-lg border-2 md:border-4 border-white -rotate-3 h-32 sm:h-48 md:h-64 overflow-hidden bg-pink-100 relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-result-paste-file-_1_x1lwp3.jpg" 
                    alt="Playground Móvel Brasília Brinca Móvel" 
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
                <div className="rounded-[1.5rem] md:rounded-[2rem] shadow-lg border-2 md:border-4 border-white -rotate-6 h-32 sm:h-48 md:h-64 overflow-hidden bg-blue-100 relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-result-paste-file-_2_lyluqv.jpg" 
                    alt="Estrutura externa do Playground Móvel" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-2 md:mt-4 animate-bounce-gentle" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}>
                <div className="rounded-[1.5rem] md:rounded-[2rem] shadow-lg border-2 md:border-4 border-white rotate-6 h-32 sm:h-48 md:h-64 overflow-hidden bg-yellow-100 relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103172/result-result-paste-file-_3_bzxwdf.jpg" 
                    alt="Brinca Móvel Oficial estacionada" 
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;