import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-400 shadow-sm bg-pink-50">
            <img 
              src="https://i.postimg.cc/26Lsc5tK/result-goro.png" 
              alt="Brinca Móvel Oficial Logo Footer" 
              className="w-full h-full object-cover lazy-image"
              loading="lazy"
              decoding="async"
              width="48"
              height="48"
              onLoad={(e) => (e.currentTarget as HTMLImageElement).classList.add('loaded')}
            />
          </div>
          <span className="text-2xl font-bold">
            <span className="text-pink-500">Brinca</span>
            <span className="text-orange-500">Móvel</span>
            <span className="text-blue-500 ml-1">Oficial</span>
          </span>
        </div>
        
        <p className="text-gray-500 max-w-md mx-auto mb-8 font-medium">
          Levando a magia do playground e a arte da pintura para todos os cantos do Distrito Federal.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8 text-gray-500">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-pink-500 transition-colors font-kids">Início</a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-pink-500 transition-colors font-kids">Sobre</a>
          <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-pink-500 transition-colors font-kids">Atrações</a>
          <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-pink-500 transition-colors font-kids">Galeria</a>
        </div>
        
        <div className="text-sm text-gray-400 border-t pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-1">
              <span>Feito com muito</span>
              <Heart size={14} className="text-pink-500 fill-current animate-bounce-gentle" />
              <span>em Brasília</span>
            </div>
            
            <p>© {new Date().getFullYear()} Brinca Móvel Oficial. Todos os direitos reservados.</p>
            
            <div className="pt-4 mt-2">
              <a 
                href="https://www.gorinsolucoes.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-white group"
              >
                <span className="text-gray-500 font-medium">Desenvolvido por</span>
                <span className="font-extrabold text-blue-600 group-hover:text-blue-700 tracking-wide flex items-center gap-1">
                  Gorin Soluções
                  <ExternalLink size={14} className="text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;