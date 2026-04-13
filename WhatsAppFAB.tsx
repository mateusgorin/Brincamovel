
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      <div className="relative pointer-events-auto flex items-center justify-center">
        {/* Efeitos de Pulsação (Ondas) */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ripple pointer-events-none"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ripple-delayed pointer-events-none"></div>

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5561984038961"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce-gentle border-2 border-white/40 group"
          style={{ animationDuration: '3s' }}
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" className="text-white group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFAB;