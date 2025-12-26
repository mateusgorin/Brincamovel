
import React from 'react';
import { Sparkles } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-pink-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse hidden md:block">
        <Sparkles size={120} className="animate-spin-slow" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-600">
          A Magia em Movimento <span className="inline-block animate-wiggle">🎥</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Veja com seus próprios olhos como o Brinca Móvel Oficial transforma o ambiente e faz a alegria da criançada em tempo real!
        </p>

        {/* Container ajustado para vídeo Vertical (Tipo Stories/Reels) */}
        <div className="relative group max-w-[320px] md:max-w-[360px] mx-auto">
          {/* Moldura do Vídeo Nativo - Formato 9:16 */}
          <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-black transition-transform duration-500 hover:scale-[1.01]">
            <video 
              className="w-full h-full object-cover"
              controls
              playsInline
              poster="https://i.postimg.cc/FKkTJM38/brincamovel-oficial-20251225-0003.jpg"
              preload="metadata"
            >
              <source 
                src="https://www.dropbox.com/scl/fi/mcwrkcvd0c4iyx0wm89fa/WhatsApp-Video-2025-12-26-at-09.29.28.mp4?rlkey=bjvsm1qj7b3e818zmrq6flko1&st=bj6zxgwj&raw=1" 
                type="video/mp4" 
              />
              Seu navegador não suporta a exibição de vídeos nativos.
            </video>
          </div>
          
          {/* Legenda Flutuante */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-pink-100">
              <span className="text-yellow-500 inline-block animate-spin-slow">⭐</span>
              <p className="text-pink-600 font-bold font-kids text-lg whitespace-nowrap">
                "A diversão que não para!"
              </p>
              <span className="text-yellow-500 inline-block animate-spin-slow">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
