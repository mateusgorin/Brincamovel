
import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-pink-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse hidden md:block">
        <Sparkles size={120} />
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-600">
          A Magia em Movimento 🎥
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Veja com seus próprios olhos como o Brinca Móvel transforma o ambiente e faz a alegria da criançada em tempo real!
        </p>

        <div className="relative group">
          {/* Moldura do Vídeo */}
          <div className="relative aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 transition-transform duration-500 hover:scale-[1.01]">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://i.postimg.cc/15Sb13wX/Screenshot-20251225-204842-Whats-App.jpg"
            >
              <source src="" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            
            {/* Overlay visual para convite ao play */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none">
              <div className="bg-pink-500/90 text-white p-5 rounded-full shadow-2xl transform transition-transform group-hover:scale-125">
                <Play size={40} fill="currentColor" />
              </div>
            </div>
          </div>
          
          {/* Legenda Flutuante */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-white px-8 py-3 rounded-full shadow-md border-2 border-pink-100">
            <span className="text-yellow-500">⭐</span>
            <p className="text-pink-600 font-bold font-kids text-lg">
              "A diversão que não para!"
            </p>
            <span className="text-yellow-500">⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;