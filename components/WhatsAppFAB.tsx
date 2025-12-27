
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5561984038961"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce-gentle border-2 border-white/20"
        style={{ animationDuration: '3s' }}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppFAB;
