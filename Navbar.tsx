
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
    { name: 'Contato', href: '#contato' },
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
          <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer" onClick={(e) => handleNavClick(e as any, '#')}>
            <div className="w-10 h-10 bg-pink-100 rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-400">
              <img 
                src="https://i.postimg.cc/FKkTJM38/brincamovel-oficial-20251225-0003.jpg" 
                alt="Brinca Móvel Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-pink-500">Brinca</span>
              <span className="text-orange-500">Móvel</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-600 hover:text-pink-500 font-kids transition-colors px-3 py-2 text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-kids px-6 py-2.5 rounded-full transition-all transform hover:scale-105 hover:shadow-lg ml-4"
              >
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-base">Reservar Data</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 hover:text-pink-500 block px-3 py-4 rounded-md text-lg font-medium font-kids border-b border-gray-50 last:border-0"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/5561984038961"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-4 rounded-2xl text-lg font-bold font-kids text-center shadow-lg active:scale-95 transition-transform"
              >
                <MessageCircle size={22} />
                <span>Reservar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
