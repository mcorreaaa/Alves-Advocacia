import React from 'react';
import Section from './Section';
import { ShieldCheck, Handshake, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Evite Prejuízos",
      desc: "Analisamos cada cláusula para impedir multas indevidas, obrigações abusivas e riscos ocultos que podem custar caro."
    },
    {
      icon: <Handshake size={40} strokeWidth={1.5} />,
      title: "Negocie com Confiança",
      desc: "Ajudamos você a renegociar cláusulas para deixar direitos e deveres equilibrados, garantindo uma relação justa."
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1.5} />,
      title: "Reduza Riscos",
      desc: "Contratos bem feitos evitam conflitos futuros, desgastes emocionais e ações judiciais desnecessárias."
    }
  ];

  return (
    <Section theme="dark" className="bg-[#151619]">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white mb-2">Mais Segurança</h2>
        <p className="text-corporate-petrol font-medium">Em cada decisão que você toma</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {benefits.map((item, idx) => (
          <div key={idx} className="group p-8 border border-gray-800 hover:border-corporate-petrol transition-colors duration-300 bg-corporate-dark/50">
            <div className="text-corporate-petrol mb-6 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;