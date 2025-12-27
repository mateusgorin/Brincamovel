
import React from 'react';
import { Sparkles, Play, Palette, Rocket } from 'lucide-react';

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
    <section className="py-24 bg-pink-50 relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse hidden md:block">
        <Sparkles size={120} className="animate-spin-slow" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-pink-600">
          A Magia em Movimento <span className="inline-block animate-wiggle">🎥</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Assista aos nossos vídeos e sinta a energia da diversão! Da pintura artística aos pulos na carretinha, cada momento é especial. ✨
        </p>

        {/* Grid de Vídeos Verticais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-center items-start">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div 
                className="relative w-full max-w-[280px] md:max-w-full aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-black transition-all duration-500 hover:scale-[1.03] hover:shadow-pink-200/50"
                style={{ aspectRatio: '9/16' }}
              >
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="none" /* Mudado para none para máxima performance inicial */
                >
                  <source src={video.url} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              
              {/* Legenda Estilizada */}
              <div className="mt-6">
                <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-pink-100 transform transition-transform group-hover:scale-110">
                  <div className="bg-pink-50 p-1.5 rounded-full">
                    {video.icon}
                  </div>
                  <p className="text-pink-600 font-bold font-kids text-lg whitespace-nowrap">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decoração inferior */}
      <div className="mt-16 text-center">
        <div className="inline-block animate-bounce-gentle">
          <div className="flex items-center gap-2 text-pink-400 font-kids text-xl opacity-60">
             <Sparkles size={24} />
             <span>Transformando eventos em memórias</span>
             <Sparkles size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
