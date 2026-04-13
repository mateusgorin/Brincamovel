import React from 'react';
import { Star, Ticket } from 'lucide-react';
import { motion } from 'motion/react';

const AgendaSemanal: React.FC = () => {
  const agendaItems = [
    { dia: 'TER', local: 'Águas Claras', detalhe: 'Rua do Lazer' },
    { dia: 'QUA', local: 'Guará', detalhe: 'Polo de Modas' },
    { dia: 'QUI', local: 'Samambaia', detalhe: '301' },
    { dia: 'SEX', local: 'Riacho Fundo 1', detalhe: '' },
    { dia: 'SÁB', local: 'Núcleo Bandeirante', detalhe: 'Praça Padre Roque' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="agenda" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 font-kids mb-3 md:mb-4">
            📅 Agenda Semanal
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Encontre a Brinca Móvel perto de você!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 md:mt-10">
          {agendaItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border-2 border-pink-200 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-md hover:scale-105 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="inline-flex items-center space-x-1.5 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-bold mb-3 md:mb-4">
                <Star size={12} fill="currentColor" className="animate-pulse" />
                <span>{item.dia}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                {item.local}
              </h3>
              <p className="text-gray-600 font-bold mb-2 md:mb-3 text-sm md:text-base">
                {item.detalhe || '\u00A0'}
              </p>
              <p className="text-pink-500 font-medium text-sm md:text-base mt-auto">
                16h às 22h
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tabela de Valores */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 font-kids mb-2">
              🎟️ Valores dos Ingressos
            </h3>
            <p className="text-gray-600 text-base md:text-lg">A partir de apenas R$ 15!</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-8 lg:gap-12">
            {/* Foto à esquerda */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-48 sm:h-64 md:h-full"
            >
              <div className="relative group h-full">
                <div className="absolute -inset-4 bg-orange-200 rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity hidden md:block"></div>
                <div className="relative z-10 h-full bg-white border-2 border-orange-200 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776085511/Picsart_26-04-13_10-00-34-253_tz8y3a.png" 
                    alt="Brinca Móvel Diversão" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Tabela à direita */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <div className="bg-white border-2 border-orange-200 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Ticket size={80} className="rotate-12 md:w-[120px] md:h-[120px]" />
                </div>
                
                <div className="space-y-2 md:space-y-4 relative z-10">
                  {[
                    { tempo: '15 minutos', valor: '15' },
                    { tempo: '20 minutos', valor: '20' },
                    { tempo: '30 minutos', valor: '25' },
                    { tempo: '1 hora', valor: '50' },
                  ].map((price, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-orange-50 transition-colors border-b border-orange-100 last:border-0"
                    >
                      <span className="text-base sm:text-lg md:text-xl font-bold text-gray-700 font-sans">
                        {price.tempo}
                      </span>
                      <div className="flex items-center space-x-1 md:space-x-2">
                        <span className="text-gray-400 text-xs md:text-sm">R$</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-black text-orange-500 font-kids">
                          {price.valor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
            Para festas e eventos, consulte disponibilidade 👇
          </p>
          <div className="flex justify-center">
            <a 
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-kids px-6 md:px-8 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-xl group"
            >
              <span>Pedir Orçamento</span>
              <Star size={20} className="group-hover:animate-spin-slow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSemanal;

