import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, MessageCircle, Info, Star, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isNavigating = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.classList.add('mobile-menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('mobile-menu-open');
      if (scrollY && !isNavigating.current) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'O que é?', href: '#sobre', icon: Info },
    { name: 'Atrações', href: '#servicos', icon: Star },
    { name: 'Galeria', href: '#galeria', icon: ImageIcon },
    { name: 'Clientes', href: '#depoimentos', icon: MessageCircle },
    { name: 'Agenda', href: '#agenda', icon: Calendar },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top;
      
      // Se o menu estiver aberto, o corpo está fixo e window.pageYOffset é 0.
      // Precisamos recuperar a posição real do scroll do estilo do corpo.
      const bodyTop = document.body.style.top;
      const currentScroll = bodyTop ? parseInt(bodyTop) * -1 : window.pageYOffset;
      const offsetPosition = elementPosition + currentScroll - offset;

      if (isOpen) {
        isNavigating.current = true;
        setIsOpen(false);
        
        // Pequeno delay para garantir que o useEffect de fechamento rodou e removeu o position: fixed
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          isNavigating.current = false;
        }, 50);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
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
                <span className="text-blue-500 ml-1 inline">Oficial</span>
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
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm touch-none"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-[70] max-h-[70vh] bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
          >
            <div className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-pink-100 rounded-full"></div>
            </div>
            
            <div className="flex justify-between items-center px-5 py-4 border-b border-pink-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-400 shadow-sm">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-goro_nosw9r.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <span className="text-base font-bold tracking-tight">
                  <span className="text-pink-500">Brinca</span><span className="text-orange-500">Móvel</span><span className="text-blue-500 ml-1">Oficial</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-pink-500 hover:text-pink-600 focus:outline-none bg-pink-50 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-5 py-3 overscroll-contain">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center justify-between group py-3.5 px-3 rounded-2xl text-base font-kids font-medium text-gray-700 active:text-pink-600 active:bg-pink-100 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center shadow-sm group-active:scale-90 transition-transform">
                          <Icon size={18} className="text-pink-500" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-gray-300 group-active:text-pink-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
              <a
                href="https://wa.me/5561984038961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-2xl font-bold font-kids text-base flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
              >
                <MessageCircle size={24} />
                <span>Reservar pelo WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;