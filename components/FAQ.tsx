import React, { useState } from 'react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-light ${isOpen ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>
          {question}
        </span>
        <span className="text-corporate-petrol ml-4">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 font-light pr-12">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <Section theme="dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-light uppercase tracking-widest text-white mb-12 text-center">Perguntas Frequentes</h2>
        
        <div className="space-y-2">
          <FAQItem 
            question="Preciso de advogado mesmo para um contrato simples?"
            answer="Sim. Muitas vezes o que parece simples esconde cláusulas genéricas que não protegem sua realidade específica e podem gerar prejuízos enormes no futuro."
          />
          <FAQItem 
            question="Vocês atendem pessoas físicas e empresas?"
            answer="Sim. Atendemos tanto pessoas físicas em questões patrimoniais e de serviços, quanto empresas de todos os portes em suas demandas comerciais."
          />
          <FAQItem 
            question="Posso pedir apenas a revisão de um contrato pronto?"
            answer="Claro. Analisamos contratos já redigidos pela outra parte, apontamos riscos (sinal vermelho), pontos de atenção (sinal amarelo) e sugerimos melhorias para sua segurança."
          />
        </div>
      </div>
    </Section>
  );
};

export default FAQ;