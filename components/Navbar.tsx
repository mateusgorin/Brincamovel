import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O que é?', href: '#sobre' },
    { name: 'Atrações', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Clientes', href: '#depoimentos' },
    { name: 'Agenda', href: '#agenda' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md h-16' : 'bg-white h-20'} border-b border-pink-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={(e) => handleNavClick(e as any, '#')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-400">
              <img 
                src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-goro_nosw9r.png" 
                alt="Brinca Móvel Oficial Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">
              <span className="text-pink-500">Brinca</span>
              <span className="text-orange-500">Móvel</span>
              <span className="text-blue-500 ml-1 hidden sm:inline">Oficial</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-2 lg:ml-10 flex items-center space-x-1 lg:space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-800 hover:text-pink-500 font-kids transition-colors px-1.5 lg:px-3 py-2 text-sm lg:text-lg font-medium whitespace-nowrap inline-block"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="group relative inline-flex items-center space-x-1 lg:space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-kids px-3 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all transform hover:scale-105 hover:shadow-lg ml-1 lg:ml-4 shadow-pink-200/50 whitespace-nowrap"
              >
                <Calendar size={16} className="group-hover:rotate-12 transition-transform group-hover:animate-wiggle" />
                <span className="text-xs lg:text-base">Reservar <span className="hidden lg:inline">Data</span></span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-pink-600 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full-Screen */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-[100] transform transition-all duration-300 ease-in-out flex flex-col ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 h-20 border-b border-pink-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-100 rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-400">
              <img 
                src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-goro_nosw9r.png" 
                alt="Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-base font-bold tracking-tight">
              <span className="text-pink-500">Brinca</span><span className="text-orange-500">Móvel</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-pink-500 hover:text-pink-600 focus:outline-none bg-pink-50 rounded-full"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <div className="flex flex-col items-center space-y-8 w-full">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-800 hover:text-pink-500 text-3xl font-medium font-kids transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="mt-12 w-full max-w-xs">
            <a
              href="https://wa.me/5561984038961"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-4 rounded-full text-xl font-bold font-kids text-center shadow-lg active:scale-95 transition-transform w-full"
            >
              <MessageCircle size={24} className="animate-bounce-gentle" />
              <span>Reservar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;