import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá Brinca Móvel Oficial! Gostaria de solicitar um orçamento:
*Nome:* ${formData.name || 'Não informado'}
*Data do Evento:* ${formData.date || 'Não informada'}
*Horário:* ${formData.time || 'Não informado'}
*Local do Evento:* ${formData.location || 'Não informado'}

Aguardo o retorno! ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5561984038961?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-pink-500 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-8 opacity-20">
        <MessageCircle size={200} className="animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white flex items-center justify-start gap-3 group cursor-default">
              Vamos levar a festa para você? 
              <span className="inline-block animate-bounce-gentle transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                <svg width="40" height="56" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-12 md:w-12 md:h-16">
                  {/* Corpo do Balão Amarelo */}
                  <path d="M20 36C31.0457 36 40 27.9411 40 18C40 8.05888 31.0457 0 20 0C8.9543 0 0 8.05888 0 18C0 27.9411 8.9543 36 20 36Z" fill="#FACC15"/>
                  {/* Brilho */}
                  <path d="M12 8C9.6 9.6 8 12 8 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  {/* Nó */}
                  <path d="M20 36L17.6 40H22.4L20 36Z" fill="#EAB308"/>
                  {/* Fita Azul */}
                  <path d="M20 40C20 40 28 44 20 48C12 52 20 56 20 56" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h2>
            <p className="text-xl mb-10 text-pink-50 max-w-xl mx-0 leading-relaxed">
              Entre em contato agora para verificar disponibilidade de data em Brasília e região. Estamos prontos para criar memórias inesquecíveis!
            </p>

            <div className="flex flex-col gap-4 items-start">
              {/* Botão Instagram */}
              <a 
                href="https://www.instagram.com/brincamovel.oficial?igsh=cm5lMzN3amp3c2J4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 group font-bold text-lg w-full max-w-[280px] justify-center lg:justify-start"
              >
                <div className="bg-pink-100 p-1.5 rounded-full group-hover:bg-pink-200 transition-colors">
                  <Instagram size={22} className="group-hover:rotate-12 transition-transform" />
                </div>
                <span>Siga no Instagram</span>
              </a>

              {/* Botão Telefone */}
              <a 
                href="https://wa.me/5561984038961" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 group font-bold text-lg w-full max-w-[280px] justify-center lg:justify-start"
              >
                <div className="bg-pink-100 p-1.5 rounded-full group-hover:bg-pink-200 transition-colors">
                  <Phone size={22} className="group-hover:animate-wiggle" />
                </div>
                <span>(61) 98403-8961</span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md bg-white text-gray-800 p-8 rounded-[3.5rem] shadow-2xl mx-auto lg:mx-0">
            <h3 className="text-3xl font-bold mb-8 text-pink-500 text-center">Peça seu orçamento</h3>
            <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2 ml-4 text-gray-500">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white focus:ring-0 outline-none transition-all text-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4 text-gray-500">Data do Evento</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white focus:ring-0 outline-none transition-all text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4 text-gray-500">Horário</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white focus:ring-0 outline-none transition-all text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-4 text-gray-500">Local do Evento</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Bairro em Brasília"
                  className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white focus:ring-0 outline-none transition-all text-lg"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-2xl font-kids py-5 rounded-full transition-all flex items-center justify-center space-x-3 mt-6 shadow-xl transform hover:scale-[1.02] active:scale-95 group"
              >
                <MessageCircle size={28} className="group-hover:animate-bounce" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-6 font-medium">
              Respondemos rapidinho para garantir sua data! <span className="inline-block animate-wiggle">⚡</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;