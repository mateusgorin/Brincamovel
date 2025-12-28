
import React from 'react';
import { Star, Quote, Instagram } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana",
    role: "Mãe do Theo",
    content: "A carretinha foi o ponto alto da festa! As crianças ficaram encantadas e não queriam sair. O espaço é super seguro e os monitores muito atenciosos. Melhor escolha que fizemos!",
    color: "bg-pink-100",
    borderColor: "border-pink-200",
    textColor: "text-pink-600"
  },
  {
    name: "Ricardo",
    role: "Pai da Alice",
    content: "Surpreendente como a carretinha traz alegria para as crianças. A pintura facial é muito legal, as tintas são realmente boas e não causaram alergia. Recomendo de olhos fechados!",
    color: "bg-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-600"
  },
  {
    name: "Camila",
    role: "Mãe do Davi",
    content: "Obrigada por ontem 💖💖 Vocês fizeram a diferença! Foi maravilhoso! O Davi adorou demais. Ele e os amiguinhos, e as mães elogiaram muito.",
    color: "bg-orange-100",
    borderColor: "border-orange-200",
    textColor: "text-orange-600"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que dizem meus clientes <span className="inline-block animate-wiggle">💬</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A alegria das famílias de Brasília é o que nos motiva a levar diversão por onde passamos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className={`${t.color} border-4 ${t.borderColor} p-8 rounded-[3rem] relative transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="absolute -top-5 left-10 bg-white p-3 rounded-2xl shadow-md text-yellow-400 group-hover:animate-bounce-gentle">
                <Quote size={24} fill="currentColor" />
              </div>
              
              <div className="flex mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                "{t.content}"
              </p>

              <div>
                <h4 className={`font-bold text-xl ${t.textColor}`}>{t.name}</h4>
                <p className="text-gray-500 text-sm font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div 
            className="inline-flex items-center space-x-3 bg-green-50 text-green-600 px-8 py-4 rounded-full border-2 border-green-200 shadow-sm transition-all"
          >
            <span className="font-bold text-lg">Deixe sua avaliação no Google</span>
            <div className="flex items-center gap-1">
              <Star size={20} fill="currentColor" className="text-yellow-400 animate-pulse" />
            </div>
          </div>

          <a 
            href="https://www.instagram.com/brincamovel.oficial?igsh=cm5lMzN3amp3c2J4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-pink-50 hover:bg-pink-100 text-pink-600 px-8 py-4 rounded-full border-2 border-pink-200 shadow-sm transition-all hover:scale-105 group"
          >
            <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg">Siga nosso Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
