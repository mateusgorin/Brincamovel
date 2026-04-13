import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Mariana",
    role: "Mãe do Theo",
    location: "Asa Norte",
    date: "Janeiro 2026",
    content: "A carretinha foi o ponto alto da festa! As crianças ficaram encantadas e não queriam sair. O espaço é super seguro e os monitores muito atenciosos. Melhor escolha que fizemos!",
    color: "bg-pink-100",
    borderColor: "border-pink-200",
    textColor: "text-pink-600",
    avatarBg: "bg-pink-500"
  },
  {
    name: "Ricardo",
    role: "Pai da Alice",
    location: "Taguatinga",
    date: "Fevereiro 2026",
    content: "Surpreendente como a carretinha traz alegria para as crianças. A pintura facial é muito legal, as tintas são realmente boas e não causaram alergia. Recomendo de olhos fechados!",
    color: "bg-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    avatarBg: "bg-blue-500"
  },
  {
    name: "Camila",
    role: "Mãe do Davi",
    location: "Águas Claras",
    date: "Março 2026",
    content: "Obrigada por ontem 💖💖 Vocês fizeram a diferença! Foi maravilhoso! O Davi adorou demais. Ele e os amiguinhos, e as mães elogiaram muito.",
    color: "bg-orange-100",
    borderColor: "border-orange-200",
    textColor: "text-orange-600",
    avatarBg: "bg-orange-500"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 hidden md:block"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            O que dizem meus clientes <span className="inline-block animate-wiggle">💬</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A alegria das famílias de Brasília é o que nos motiva a levar diversão por onde passamos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${t.color} border-2 md:border-4 ${t.borderColor} p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] relative transition-all duration-300 hover:scale-105 hover:shadow-xl group flex flex-col h-full`}
            >
              <div className="absolute -top-4 md:-top-5 left-6 md:left-10 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-md text-yellow-400 group-hover:animate-bounce-gentle">
                <Quote size={20} className="md:w-6 md:h-6" fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 mt-2">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-xl md:text-2xl font-kids shadow-inner shrink-0`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className={`font-bold text-base md:text-lg leading-tight ${t.textColor}`}>
                    {t.name} <span className="text-gray-500 font-medium text-xs md:text-sm">({t.location})</span>
                  </h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="md:w-[14px] md:h-[14px] text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic mb-4 md:mb-6 leading-relaxed text-base md:text-lg flex-grow">
                "{t.content}"
              </p>

              <div className="pt-3 md:pt-4 border-t border-black/5">
                <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Avaliações Google */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 py-8 md:py-10 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 border-t-2 border-b-2 border-yellow-200"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            {/* Grupo esquerdo */}
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold font-kids">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
              <p className="text-gray-500 font-medium text-sm md:text-base">Avaliações</p>
            </div>

            {/* Divisória */}
            <div className="hidden md:block w-px h-16 bg-yellow-200"></div>

            {/* Grupo central */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <div className="text-yellow-400 text-3xl md:text-4xl">★★★★★</div>
                <span className="text-4xl md:text-5xl font-bold font-kids text-gray-800">5.0</span>
              </div>
              <p className="text-gray-500 font-medium mt-1 text-sm md:text-base">Avaliação máxima</p>
            </div>

            {/* Divisória */}
            <div className="hidden md:block w-px h-16 bg-yellow-200"></div>

            {/* Grupo direito */}
            <div>
              <a 
                href="https://g.page/r/CSDfqpHMzpq9EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold font-kids px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                <span>⭐ Deixe sua avaliação</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;