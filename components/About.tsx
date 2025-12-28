
import React from 'react';
import { Heart, CheckCircle, Maximize2 } from 'lucide-react';

const About: React.FC = () => {
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <section id="sobre" className="py-24 bg-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600 uppercase tracking-tight">CARRETINHA PLAYGROUND <span className="inline-block animate-pulse">✨</span></h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-orange-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-orange-500 p-3 rounded-2xl text-white shrink-0">
                  <Maximize2 size={24} className="group-hover:animate-bounce-gentle" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-orange-700">Compacta e Versátil</h4>
                  <p className="text-base">Ocupa apenas uma faixa de estacionamento, sem atrapalhar o trânsito. Ideal para qualquer espaço.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-pink-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-pink-500 p-3 rounded-2xl text-white shrink-0">
                  <CheckCircle size={24} className="group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-pink-700">Conforto Térmico</h4>
                  <p className="text-base">Telhado de PVC térmico que não esquenta, mantendo a temperatura agradável mesmo no sol forte de Brasília.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-3xl border border-blue-100 shadow-sm transition-transform hover:scale-[1.02] group">
                <div className="bg-blue-500 p-3 rounded-2xl text-white shrink-0">
                  <Heart size={24} className="group-hover:animate-beat" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-blue-700">Diversão Segura</h4>
                  <p className="text-base">Piscina de bolinhas, escorregador, cama elástica e monitores treinados para total tranquilidade.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="animate-bounce-gentle" style={{ animationDuration: '4s', animationDelay: '0s' }}>
                <div className="rounded-[2rem] overflow-hidden shadow-lg border-4 border-white rotate-3 h-48 sm:h-64 bg-orange-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://previews.dropbox.com/p/thumb/AC0eA80_fsTvGX8Wb7doGY2VaH8ThRarF1minq68M6bq16aatWhOqR4YnjQF47t7ptKyjy2mu8LmknCK4t-4k4ViSD9Apy6aewlub0UCi_dFAJTMt02gPJSUkhyoAqFQhEaUXg64SVLB8_cY-3XULme-CnU9vlle6Af0fqgQHDj_lJDS6NzNAOfUuyDxDmxp9F2du7R5za0ukQ8NquUVijhQrdbnZbTCcUK5yEWJ1vhf6KPMm1PV80ycHBXj9fE_HNARLI3DT1vvDpNVZU5k4FXh3DUq8TFgYK4DKbJxB8QbH8NR1OzJm3OgoHuijOXGHas/p.jpeg" 
                    alt="Interior do Playground Móvel em Brasília" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-8 animate-bounce-gentle" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-3 h-48 sm:h-64 overflow-hidden bg-pink-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://previews.dropbox.com/p/thumb/AC1wTh8uZqV7mpy_Pqg_rPVob3RO0ZQ9gu9gBHreYA5I5gM9Yp5Ym2gCLnkT_mpDt3vCVk6Z_NsnqNX9U8V-qRVP1ghe3ME1AK2yVyUueliu8E6lnIBwyWrmTAW8DmD4sspZR79SOEHXQUFe1CAZ4RcdHEbvLySxootlfqJ0ZrWseLdCAkl1lbV_aA6UcaDJar0hW0_TQMcjEy-kghvabam0aKFWWTyds8IkaHqc9c1b6zGirgLIq-npbKcFW5UEdoKoUGRIOxZfVQ86Uwinv97WWk1v_Vg7p04XVk1uDPVN_YAHYRNmLv8xyt5kMAgJOyI/p.jpeg" 
                    alt="Playground Móvel Brasília Brinca Móvel" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="animate-bounce-gentle" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white -rotate-6 h-48 sm:h-64 overflow-hidden bg-blue-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://previews.dropbox.com/p/thumb/AC0TPEYnhhg8N8GocupP1NolkstY4PDWo_TFzCa3NEL-mOBRh7BVWiC6DqkSZGWzYkLd2i7n5hHv1fNnOAcZGyAcPWyxjJdCVjUxgRstIFGq7hIpaPy2Qfrixh6q_gDyJlnglDaZthx9NgTaerprIdTxGG4DaJYLvHFCPzQbAY4N4WS3-TUQti9rNxOLowEF4j4pY4JBopTfKmOncFHchgYCLMoH5Cw8PACbDlWtGOoWNevxBAr5mAprcrPJDgtXzYy38cAVftHxSOq1TliUkqEyF0GNDEUlhacCWScl7y5eq9Ooa1_lNT-RA-e-E4zPzfE/p.jpeg" 
                    alt="Estrutura externa do Playground Móvel" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
              
              <div className="mt-4 animate-bounce-gentle" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}>
                <div className="rounded-[2rem] shadow-lg border-4 border-white rotate-6 h-48 sm:h-64 overflow-hidden bg-yellow-100 shimmer-bg relative transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-20 hover:shadow-2xl cursor-pointer">
                  <img 
                    src="https://previews.dropbox.com/p/thumb/AC2syQv7KOfU69Fsc1C4gDUeYbjyqZ-XAY1_y7Ovtzcj_oJKqPXx4YBBQyFNm2hYQgppKnwdxsJf0JTZINCcfs3rkjyempe4oPB_cNjHkWfpv2e4BevsuHw93Laa0PReZdZlHGNZYEP5UCEgX2bBq77YHJ49DwzoHoglvpDK5zd3GJr4i0oToYh8CRwOStQ5t15dsSJr7Hd3rlVHg2uW8ejHqhWLJ3qGCK8H_LHRp26aPszAwaDHUVCn6zb3qEw5a0cqpRO1Fcg3PoRR7ndeeVlseLGg8hlBePjcpjI81kwmzmPDvK26Jt3MBoMmmNV8Hnw/p.jpeg" 
                    alt="Brinca Móvel Oficial estacionada" 
                    className="w-full h-full object-cover lazy-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    onLoad={handleLoad}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
