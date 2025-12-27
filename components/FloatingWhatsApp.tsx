
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Aparece após um pequeno delay para melhorar o engajamento
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("Olá Brinca Móvel! Gostaria de saber mais sobre o playground móvel para o meu evento. ✨");
    window.open(`https://wa.me/5561984038961?text=${message}`, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[60] transition-all duration-700 transform ${
        isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
      }`}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-pink-100 hidden md:block">
          Fale com a gente no WhatsApp
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white"></div>
        </div>

        {/* Efeito de Ondas (Pulse) */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
        
        {/* Botão Principal */}
        <button
          onClick={handleClick}
          aria-label="Falar pelo WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 animate-wiggle"
          style={{ animationIterationCount: 'infinite', animationDuration: '4s' }}
        >
          <MessageCircle size={32} fill="currentColor" className="text-white" />
          
          {/* Badge de notificação sutil */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
