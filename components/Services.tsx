import React from 'react';
import Section from './Section';
import { Users, Home, Building2, Wifi, DollarSign, Zap, ArrowRight } from 'lucide-react';
import Button from './Button';

interface ServicesProps {
  onShowDetails?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onShowDetails }) => {
  const mainCategories = [
    { icon: Users, label: "Família & Patrimônio" },
    { icon: Home, label: "Imobiliário" },
    { icon: Building2, label: "Empresarial / Digital" },
    { icon: Wifi, label: "Economia Digital" },
    { icon: DollarSign, label: "Financeiro & Patrimonial" },
    { icon: Zap, label: "Serviços de Alta Conversão" },
  ];

  return (
    <Section theme="light" className="bg-[#f4f1ea]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-corporate-petrol text-sm uppercase tracking-[0.3em] font-bold mb-4">Nossa Expertise</h2>
          <h2 className="text-3xl md:text-4xl font-light text-corporate-dark mb-6">Como podemos ajudar</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Atuamos em todas as etapas da relação contratual, sempre com linguagem clara, orientação direta e foco no que realmente importa para a proteção do seu negócio ou patrimônio.
          </p>
          <div className="h-1 w-20 bg-corporate-petrol mb-8"></div>

          {onShowDetails && (
            <Button onClick={onShowDetails} icon={<ArrowRight size={18} />}>
              Ver todos os serviços detalhados
            </Button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {mainCategories.map((service, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow rounded-lg">
              <div className="bg-corporate-petrol/10 p-2.5 rounded-full">
                <service.icon className="text-corporate-petrol" size={22} />
              </div>
              <span className="text-corporate-dark font-medium text-base">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;