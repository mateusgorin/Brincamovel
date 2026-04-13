import React from 'react';
import { Star, Play, Palette, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const videos = [
  {
    url: "https://www.dropbox.com/scl/fi/mcwrkcvd0c4iyx0wm89fa/WhatsApp-Video-2025-12-26-at-09.29.28.mp4?rlkey=bjvsm1qj7b3e818zmrq6flko1&st=bj6zxgwj&raw=1",
    title: "Carretinha em Ação",
    icon: <Play size={20} className="text-pink-500" />,
  },
  {
    url: "https://www.dropbox.com/scl/fi/dzogx95hdgiu4xjlnwyvn/WhatsApp-Video-2025-12-26-at-14.58.18.mp4?rlkey=zisibunlnlttwwwdpq70cx9s4&st=7fewvj6i&raw=1",
    title: "Magia da Pintura",
    icon: <Palette size={20} className="text-orange-500" />,
  },
  {
    url: "https://www.dropbox.com/scl/fi/gqgqldmn24skymmrn1cdn/WhatsApp-Video-2025-12-26-at-14.58.22.mp4?rlkey=6vto1p41fy8skse7fk1wg4p0n&st=fkslcve1&raw=1",
    title: "Diversão Completa",
    icon: <Rocket size={20} className="text-blue-500" />,
  }
];

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-16 md:py-24 bg-pink-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse hidden md:block">
        <Star size={120} className="animate-spin-slow" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-pink-600">
            A Magia em Movimento <span className="inline-block animate-wiggle">🎥</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Assista aos nossos vídeos e sinta a energia da diversão! Da pintura artística aos pulos na carretinha, cada momento é especial. ✨
          </p>
        </motion.div>

        {/* Grid de Vídeos Verticais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center items-start">
          {videos.map((video, index) => {
            const borderClasses = [
              "border-pink-500 shadow-pink-500/30",
              "border-cyan-400 shadow-cyan-400/30",
              "border-purple-500 shadow-purple-500/30"
            ];
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center group video-container ${index === 2 ? 'sm:col-span-2 md:col-span-1 sm:mx-auto' : ''}`}
              >
                <div className={`relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-full aspect-[9/16] rounded-3xl overflow-hidden border-2 shadow-lg ${borderClasses[index]}`}>
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <source src={video.url} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                
                {/* Legenda Estilizada */}
                <div className="mt-4 md:mt-6">
                  <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg border-2 border-pink-100 transform transition-transform group-hover:scale-110">
                    <div className="bg-pink-50 p-1 md:p-1.5 rounded-full">
                      {video.icon}
                    </div>
                    <p className="text-pink-600 font-bold font-kids text-base md:text-lg whitespace-nowrap">
                      {video.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Decoração inferior */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 md:mt-16 text-center"
      >
        <div className="inline-block animate-bounce-gentle">
          <div className="flex items-center gap-2 text-pink-400 font-kids text-lg md:text-xl opacity-60">
             <Star size={20} className="md:w-6 md:h-6" />
             <span>Transformando eventos em memórias</span>
             <Star size={20} className="md:w-6 md:h-6" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;