import React from 'react';
import Section from './Section';
import { ArrowLeft, Users, Home, Building2, Wifi, DollarSign, Zap } from 'lucide-react';
import Button from './Button';

interface ServicesPageProps {
    onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
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
        <div className="min-h-screen bg-[#f4f1ea]">
            <div className="bg-corporate-dark text-white py-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar para Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-light">Nossos Serviços Detalhados</h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl font-light">
                        Soluções jurídicas personalizadas para cada momento da sua vida e do seu negócio.
                    </p>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <div key={idx} className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-corporate-petrol/10 rounded-lg group-hover:bg-corporate-petrol/20 transition-colors">
                                    <category.icon className="text-corporate-petrol" size={24} />
                                </div>
                                <h3 className="text-xl font-medium text-corporate-dark">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-corporate-petrol rounded-full mt-1.5 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl text-corporate-dark font-light mb-6">Não encontrou o que precisa?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Cada caso é único. Se você tem uma necessidade específica que não está listada acima,
                        entre em contato para avaliarmos sua situação.
                    </p>
                    <Button onClick={() => window.open('https://wa.me/5515996680512', '_blank')}>
                        Falar com Advogada
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;
