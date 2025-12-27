
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center">
      {/* Legenda (Tooltip) */}
      <span className="mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl whitespace-nowrap">
        Fale com a gente no WhatsApp
      </span>
      
      {/* Botão */}
      <a
        href="https://wa.me/5561984038961"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce-gentle"
        style={{ animationDuration: '3s' }}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppFAB;
