import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5515996680512', '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-corporate-dark text-corporate-paper pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1920"
          alt="Background escritório advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-corporate-dark/95 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-xl">
          <div className="inline-block px-3 py-1 border border-corporate-petrol/50 text-corporate-petrol text-xs uppercase tracking-[0.2em] mb-4">
            Alves Advocacia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Contratos <span className="text-white font-medium">claros</span>, <span className="text-white font-medium">seguros</span> e feitos para proteger você.
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed border-l-2 border-corporate-petrol pl-6">
            Você não precisa aceitar cláusulas confusas ou desfavoráveis.
            Nós ajudamos você a fechar acordos com segurança, clareza e confiança.
          </p>
          <div className="pt-4">
            <Button onClick={handleContactClick} icon={<ArrowRight size={18} />}>
              Falar com um advogado
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative h-[600px] w-full bg-corporate-dark/50">
          {/* Minimalist image composition */}
          <div className="absolute top-10 right-10 w-4/5 h-4/5 bg-corporate-petrol/10 z-0 border border-corporate-petrol/20"></div>
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            alt="Assinatura de contrato com caneta tinteiro"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 z-10 shadow-2xl border-b-4 border-corporate-petrol"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;