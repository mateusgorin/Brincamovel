import React, { useState } from 'react';
import { ChevronDown, MapPin, HelpCircle, Star } from 'lucide-react';

const AreasFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const regions = [
    { name: 'Asa Sul', color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { name: 'Asa Norte', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { name: 'Taguatinga', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { name: 'Águas Claras', color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { name: 'Guará', color: 'bg-green-100 text-green-600 border-green-200' },
    { name: 'Samambaia', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { name: 'Ceilândia', color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { name: 'Lago Sul', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { name: 'Lago Norte', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { name: 'Sudoeste', color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { name: 'Plano Piloto', color: 'bg-green-100 text-green-600 border-green-200' },
    { name: 'Sobradinho', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { name: 'Gama', color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { name: 'Santa Maria', color: 'bg-blue-100 text-blue-600 border-blue-200' },
  ];

  const faqs = [
    {
      question: 'Quanto custa o aluguel da Brinca Móvel?',
      answer: 'O valor do investimento varia de acordo com a localização do evento e o pacote de serviços escolhido (Playground, Pintura Facial ou ambos). Entre em contato conosco pelo WhatsApp para receber um orçamento personalizado e rápido!'
    },
    {
      question: 'Por quantas horas os brinquedos ficam no evento?',
      answer: 'Nosso período padrão de locação é de 4 horas de diversão garantida. Caso precise de mais tempo para sua festa, podemos negociar horas adicionais para que a alegria não pare!'
    },
    {
      question: 'Quais bairros e regiões vocês atendem?',
      answer: 'Atendemos em todo o Distrito Federal! Do Plano Piloto às Regiões Administrativas como Águas Claras, Taguatinga, Lago Sul e Norte, Sobradinho e muito mais. Levamos a diversão até você!'
    },
    {
      question: 'O aluguel inclui monitoria para as crianças?',
      answer: 'Sim! A segurança é nossa prioridade. Todos os nossos aluguéis acompanham monitores treinados e uniformizados que cuidam das crianças e garantem que todos brinquem com segurança e alegria.'
    },
    {
      question: 'O que é o sistema de iluminação noturna?',
      answer: 'É o nosso diferencial exclusivo! A Brinca Móvel é equipada com um sistema de iluminação LED neon que transforma o playground em um espetáculo visual para festas realizadas à noite, criando um ambiente mágico e inesquecível.'
    },
    {
      question: 'Como faço para reservar a minha data?',
      answer: 'Para garantir sua data, basta clicar em qualquer botão de "Pedir Orçamento" ou no ícone do WhatsApp. Nossa equipe verificará a disponibilidade e passará todas as instruções para a reserva formal.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção de Áreas de Atendimento */}
        <div className="mb-20 bg-pink-50/50 p-8 md:p-12 rounded-[2.5rem] border-2 border-pink-100 relative">
          <div className="absolute -top-6 -right-6 text-pink-200 opacity-50 hidden md:block">
            <MapPin size={80} />
          </div>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-500 p-2 rounded-xl text-white">
              <MapPin size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-kids">
              Atendemos em todo o <span className="text-pink-500">Distrito Federal</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {regions.map((region, index) => (
              <span 
                key={index}
                className={`px-5 py-2.5 rounded-2xl border-2 font-kids text-lg transition-all hover:scale-105 cursor-default shadow-sm ${region.color}`}
              >
                {region.name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-600 text-lg italic">
            * Consulte taxas de deslocamento para sua região específica.
          </p>
        </div>

        {/* Seção de FAQ */}
        <div className="bg-blue-50/50 p-8 md:p-12 rounded-[2.5rem] border-2 border-blue-100 relative">
          <div className="absolute -top-6 -left-6 text-blue-200 opacity-50 hidden md:block">
            <HelpCircle size={80} />
          </div>

          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-500 p-2 rounded-xl text-white">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-kids">
              Perguntas <span className="text-blue-500">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-2 rounded-3xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-400 bg-white shadow-lg' : 'border-blue-100 bg-white/50 hover:border-blue-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-xl font-bold text-gray-800 font-kids pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed border-t border-blue-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border-2 border-orange-200 text-orange-600 font-kids shadow-sm">
              <Star size={18} />
              <span>Ainda tem dúvidas? Chame a gente no WhatsApp!</span>
            </div>
          </div>
        </div>

        {/* Schema FAQPage */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default AreasFaq;
