import React from 'react';
import { motion } from 'motion/react';

const CredibilityBar: React.FC = () => {
  const metrics = [
    { highlight: '150+', subtitle: 'Festas Realizadas' },
    { highlight: '5', subtitle: 'Estrelas no Google' },
    { highlight: '100%', subtitle: 'Todo o DF Atendido' },
    { highlight: 'LED', subtitle: 'Iluminação' },
  ];

  return (
    <div className="bg-green-500 py-6 md:py-12 relative overflow-hidden credibility-bar">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {metrics.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center px-2 md:px-4 ${
                index !== metrics.length - 1 ? 'md:border-r border-green-400/30' : ''
              } ${
                index % 2 === 0 ? 'border-r md:border-r-0 border-green-400/20' : ''
              }`}
            >
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-['Fredoka'] mb-1 md:mb-2 tracking-tight">
                {item.highlight}
              </span>
              <span className="text-xs sm:text-sm md:text-lg text-green-100 font-medium font-['Nunito'] uppercase tracking-widest">
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredibilityBar;
