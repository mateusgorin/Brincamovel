
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Vamos levar a festa para você? <span className="inline-block animate-bounce-gentle">🎈</span></h2>
            <p className="text-xl mb-12 text-pink-50">
              Entre em contato agora para verificar disponibilidade de data em Brasília e região. Estamos prontos para criar memórias inesquecíveis!
            </p>
            
            <div className="space-y-6 text-xl">
              <a 
                href="https://wa.me/5561984038961" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-4 hover:text-pink-100 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Phone size={24} className="group-hover:animate-wiggle" />
                </div>
                <span>(61) 98403-8961</span>
              </a>
              <a 
                href="https://www.instagram.com/brincamovel.oficial?igsh=cm5lMzN3amp3c2J4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-4 hover:text-pink-100 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Instagram size={24} className="group-hover:animate-spin-slow" />
                </div>
                <span>@brincamovel.oficial</span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md bg-white text-gray-800 p-8 rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-pink-500 text-center">Peça seu orçamento</h3>
            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm font-bold mb-1 ml-2 text-gray-600">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1 ml-2 text-gray-600">Data do Evento</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full bg-gray-100 border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 ml-2 text-gray-600">Horário</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full bg-gray-100 border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 ml-2 text-gray-600">Local do Evento</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Bairro em Brasília"
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-kids py-4 rounded-full transition-all flex items-center justify-center space-x-2 mt-4 shadow-lg transform hover:scale-[1.02] active:scale-95 group"
              >
                <MessageCircle size={24} className="group-hover:animate-bounce" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-4">
              Respondemos rapidinho para garantir sua data! <span className="inline-block animate-wiggle">⚡</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
