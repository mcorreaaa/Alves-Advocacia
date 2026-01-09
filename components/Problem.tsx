import React from 'react';
import Section from './Section';
import { AlertCircle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <Section theme="dark" className="border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
              alt="Análise complexa de documentos e contratos" 
              className="w-full h-auto object-cover grayscale opacity-60 shadow-lg hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-corporate-petrol p-6 shadow-xl max-w-xs hidden md:block">
                <p className="text-white text-sm font-medium italic">
                  "Isso pode me prejudicar no futuro?"
                </p>
            </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-white">
            Você já se sentiu assim ao ler um contrato?
          </h2>
          
          <div className="space-y-6 text-gray-400">
            <p className="text-lg">
              Você recebe um documento cheio de termos difíceis, letras pequenas e cláusulas que ninguém explica. Fica aquela sensação de insegurança constante.
            </p>
            
            <ul className="space-y-4 border-l border-gray-800 pl-6 py-2">
              <li className="flex items-start gap-3">
                <AlertCircle className="text-corporate-petrol shrink-0 mt-1" size={20} />
                <span>"Não entendi o que estou assinando"</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-corporate-petrol shrink-0 mt-1" size={20} />
                <span>"Tenho medo de multas escondidas"</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-corporate-petrol shrink-0 mt-1" size={20} />
                <span>"Não quero dor de cabeça depois"</span>
              </li>
            </ul>

            <p className="font-medium text-white pt-4">
              Assinar sem entender pode gerar prejuízos financeiros, processos judiciais e conflitos que poderiam ser evitados.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;