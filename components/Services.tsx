import React from 'react';
import { 
  Palette, 
  CircleDot, 
  ArrowDownRight, 
  Layers, 
  Zap, 
  Heart, 
  ArrowUpCircle, 
  ThermometerSun,
  Waves
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Escadinha Colorida',
    description: 'Acesso seguro e vibrante para o interior da carretinha, começando a diversão logo no primeiro degrau.',
    icon: <Layers className="text-orange-500 group-hover:animate-bounce-gentle" size={40} />,
    color: 'bg-orange-100',
    borderColor: 'border-orange-200'
  },
  {
    title: 'Escorregador e Tobogã',
    description: 'Descidas super divertidas e emocionantes que garantem a adrenalina e o sorriso dos pequenos.',
    icon: <ArrowDownRight className="text-blue-500 group-hover:animate-wiggle" size={40} />,
    color: 'bg-blue-100',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Piscina de Bolinhas',
    description: 'Uma piscina gigante para mergulhar em um mar de cores e texturas clássicas que nunca saem de moda.',
    icon: <CircleDot className="text-pink-500 group-hover:animate-spin-slow" size={40} />,
    color: 'bg-pink-100',
    borderColor: 'border-pink-200'
  },
  {
    title: 'Ponte de Fitas',
    description: 'Para aventuras incríveis e desafios de equilíbrio que estimulam a coordenação dos pequenos exploradores.',
    icon: <Waves className="text-purple-500 group-hover:animate-wiggle" size={40} />,
    color: 'bg-purple-100',
    borderColor: 'border-purple-200'
  },
  {
    title: 'Socão Animado',
    description: 'O lugar perfeito para gastar energia com muita alegria, segurança e movimentos divertidos.',
    icon: <Zap className="text-yellow-600 group-hover:animate-pulse" size={40} />,
    color: 'bg-yellow-100',
    borderColor: 'border-yellow-200'
  },
  {
    title: 'Bananinha Sucesso',
    description: 'O brinquedo que é sucesso garantido entre os pequenos, trazendo conforto e interatividade.',
    icon: <Heart className="text-red-500 group-hover:animate-bounce-gentle" size={40} />,
    color: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  {
    title: 'Cama Elástica Interna',
    description: 'Pulos de pura felicidade em um ambiente protegido e integrado à estrutura da carretinha.',
    icon: <ArrowUpCircle className="text-green-500 group-hover:animate-bounce" size={40} />,
    color: 'bg-green-100',
    borderColor: 'border-green-200'
  },
  {
    title: 'Telhado PVC Térmico',
    description: 'Cobertura especial que não esquenta, garantindo frescor e conforto mesmo nos dias mais quentes.',
    icon: <ThermometerSun className="text-sky-500 group-hover:animate-spin-slow" size={40} />,
    color: 'bg-sky-50',
    borderColor: 'border-sky-100'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">O que tem na Carretinha? <span className="inline-block animate-wiggle">🚐</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-16 max-w-3xl mx-auto">
            Uma estrutura completa e pensada em cada detalhe para transformar seu evento em um parque de diversões móvel!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 md:border-4 ${service.borderColor} ${service.color} transition-all transform hover:-translate-y-2 hover:shadow-xl group flex flex-col items-center`}
            >
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-20 bg-gradient-to-br from-blue-100 to-white p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border-2 md:border-4 border-blue-200 inline-block max-w-4xl transform hover:scale-[1.01] transition-all shadow-xl group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left relative z-10">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 relative mx-auto md:mx-0">
               <div className="absolute inset-0 bg-blue-300 rounded-[1.5rem] md:rounded-[2rem] rotate-6 animate-pulse"></div>
               <img 
                 src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_800/v1776103171/result-Whats-App-Image-2025-12-26-at-14-58-19_coz2bd.jpg" 
                 alt="Pintura facial artística infantil Brasília DF - Brinca Móvel" 
                 className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] border-2 md:border-4 border-white shadow-lg relative z-10 -rotate-3 transition-transform group-hover:rotate-0 duration-500"
                 loading="lazy"
                 decoding="async"
                 width="224"
                 height="224"
                 fetchPriority="low"
               />
            </div>

            <div>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                <div className="bg-white p-2 md:p-3 rounded-2xl shadow-sm">
                  <Palette className="text-blue-600 animate-wiggle w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">Pintura Facial & Artística</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Além da carretinha, levamos cores e encanto para o rosto das crianças! Nossos artistas usam tintas <span className="text-blue-600 font-bold">antialérgicas</span> de alta qualidade, muito brilho e criatividade para transformar cada pequeno em seu personagem favorito.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                <span className="bg-white px-3 md:px-4 py-1.5 rounded-full text-blue-700 font-bold border border-blue-200 shadow-sm text-xs md:text-sm">⭐ Tintas Antialérgicas</span>
                <span className="bg-white px-3 md:px-4 py-1.5 rounded-full text-blue-700 font-bold border border-blue-200 shadow-sm text-xs md:text-sm">💎 Glitter e Pedrarias</span>
                <span className="bg-white px-3 md:px-4 py-1.5 rounded-full text-blue-700 font-bold border border-blue-200 shadow-sm text-xs md:text-sm">🦋 Desenhos Criativos</span>
                <span className="bg-white px-3 md:px-4 py-1.5 rounded-full text-blue-700 font-bold border border-blue-200 shadow-sm text-xs md:text-sm">🎉 Diversão Garantida</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;