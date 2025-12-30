import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import WhatsAppFAB from './components/WhatsAppFAB';
import Testimonials from './components/Testimonials';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-pink-300 ${isDarkMode ? 'dark-mode bg-[#050507]' : 'bg-pink-50'}`}>
      <Navbar />
      
      {/* Botão de Alternância de Tema Flutuante */}
      <div className="fixed bottom-6 left-6 z-[60] flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          className={`theme-toggle-btn p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex flex-col items-center justify-center border-2 group ${isDarkMode ? 'bg-gray-800 border-blue-400 text-blue-400' : 'bg-white border-pink-400 text-pink-500'}`}
          aria-label="Alternar modo de iluminação"
        >
          {isDarkMode ? (
            <>
              <Sun size={24} className="animate-spin-slow" />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Dia</span>
            </>
          ) : (
            <>
              <Moon size={24} className="animate-pulse" />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Noite</span>
            </>
          )}
        </button>
        
        {/* Legenda do Modo Noturno */}
        <div className={`px-4 py-2 rounded-2xl border-2 shadow-lg text-xs font-bold font-kids transition-all duration-500 animate-fadeIn ${isDarkMode ? 'bg-blue-900/40 border-blue-400/50 text-blue-300 shadow-[0_0_15px_rgba(0,217,255,0.3)]' : 'bg-white border-pink-200 text-pink-500'}`}>
          {isDarkMode ? 'Iluminação LED ativada! 💡' : 'A carretinha tem iluminação noturna! 💡'}
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Services />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;