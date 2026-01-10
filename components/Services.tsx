import React, { useState } from 'react';
import Section from './Section';
import { Users, Home, Building2, Wifi, DollarSign, Zap, Plus, Minus } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full p-6 flex items-center justify-between text-left focus:outline-none bg-white z-10 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-full transition-colors ${isOpen ? 'bg-corporate-petrol/20' : 'bg-corporate-petrol/10'}`}>
            <Icon className="text-corporate-petrol" size={24} />
          </div>
          <span className="text-corporate-dark font-medium text-lg md:text-xl">{title}</span>
        </div>
        <div className={`text-corporate-petrol transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div
        className={`bg-gray-50 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-6 pt-0 border-t border-gray-100/50">
          <ul className="space-y-3 mt-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600 font-light leading-relaxed">
                <span className="w-1.5 h-1.5 bg-corporate-petrol rounded-full mt-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const categories = [
    {
      title: "Família & Patrimônio",
      icon: Users,
      items: [
        "Pacto antenupcial customizado (cláusulas híbridas, sucessórias, empresariais)",
        "Contrato de namoro qualificado (proteção patrimonial)",
        "Contrato de convivência (união estável) sob medida",
        "Planejamento sucessório em vida (doações + cláusulas)",
        "Acordo de coparentalidade (casais separados / produção independente)"
      ]
    },
    {
      title: "Imobiliário",
      icon: Home,
      items: [
        "Contrato de compra e venda com cláusulas de proteção",
        "Contrato de locação com garantias modernas (caução flexível, seguro)",
        "Contrato de permuta imobiliária",
        "Contrato de investimento imobiliário entre particulares",
        "Acordo entre coproprietários"
      ]
    },
    {
      title: "Empresarial / Digital",
      icon: Building2,
      items: [
        "Acordo de sócios simplificado",
        "Contrato de vesting (startups)",
        "Contrato de prestação de serviços premium (B2B)",
        "Contrato de parceria comercial",
        "Contrato de confidencialidade (NDA) estratégico",
        "Contrato de licenciamento de marca/conteúdo"
      ]
    },
    {
      title: "Economia Digital",
      icon: Wifi,
      items: [
        "Contrato para influenciadores e creators",
        "Contrato de gestão de tráfego / marketing digital",
        "Contrato de infoprodutos",
        "Contrato de coautoria digital",
        "Termos de uso e políticas personalizadas"
      ]
    },
    {
      title: "Financeiro & Patrimonial",
      icon: DollarSign,
      items: [
        "Contrato de mútuo entre particulares",
        "Contrato de investimento-anjo",
        "Confissão de dívida",
        "Acordos extrajudiciais patrimoniais"
      ]
    },
    {
      title: "Alta Conversão (Venda Fácil)",
      icon: Zap,
      items: [
        "Casamento / união",
        "Compra de imóvel",
        "Sociedade",
        "Investimento",
        "Produção de conteúdo"
      ]
    }
  ];

  return (
    <Section theme="light" className="bg-[#f4f1ea]">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 self-start sticky top-24">
          <h2 className="text-corporate-petrol text-sm uppercase tracking-[0.3em] font-bold mb-4">Nossa Expertise</h2>
          <h2 className="text-3xl md:text-5xl font-light text-corporate-dark mb-8 leading-tight">Como podemos ajudar</h2>
          <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
            Atuamos em todas as etapas da relação contratual, sempre com linguagem clara, orientação direta e foco no que realmente importa para a proteção do seu negócio ou patrimônio.
          </p>
          <div className="h-1 w-20 bg-corporate-petrol"></div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {categories.map((category, idx) => (
            <ServiceItem
              key={idx}
              icon={category.icon}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;