import React from 'react';
import Section from './Section';

const Solution: React.FC = () => {
  return (
    <Section theme="light">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-corporate-petrol text-sm uppercase tracking-[0.3em] font-bold mb-4">A Solução</h2>
        <h3 className="text-3xl md:text-4xl text-corporate-dark font-light mb-8">
          Um contrato feito sob medida para <span className="font-semibold underline decoration-corporate-petrol decoration-2 underline-offset-4">você</span>
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Na Alves Advocacia, contratos não são apenas documentos burocráticos. 
          Eles são ferramentas estratégicas para proteger seus direitos, seu patrimônio e suas relações.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-700">
          <p>
            Atuamos com atendimento personalizado, rapidez e total transparência. 
            Nosso foco é garantir que você entenda cada linha antes de assumir qualquer risco.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            {['Empresários', 'Profissionais Autônomos', 'Investidores', 'Pessoas Físicas'].map((item) => (
              <div key={item} className="border border-gray-300 p-4 text-center hover:border-corporate-petrol transition-colors cursor-default">
                <span className="text-corporate-dark font-medium uppercase text-sm tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
            <div className="absolute inset-0 bg-corporate-petrol transform translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
              alt="Acordo fechado e aperto de mãos" 
              className="relative w-full h-auto object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>
      </div>
    </Section>
  );
};

export default Solution;