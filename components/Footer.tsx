import React from 'react';
import Button from './Button';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5515996680512', '_blank');
  };

  return (
    <footer className="bg-[#111] text-corporate-paper border-t border-gray-900">
      {/* Final CTA Area */}
      <div className="py-24 px-6 text-center bg-gradient-to-b from-corporate-dark to-[#111]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Pronto para assinar contratos com mais <span className="italic font-serif text-corporate-petrol">tranquilidade</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Evite erros que podem custar caro no futuro. Fale agora com a Alves Advocacia e tenha clareza antes de assinar qualquer documento.
          </p>
          <div className="pt-4">
            <Button variant="whatsapp" onClick={handleContactClick} icon={<MessageCircle size={20} />}>
              Falar no WhatsApp Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="border-t border-gray-900 py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="uppercase tracking-widest text-white font-semibold">Alves Advocacia</span>
            <span>Contratos & Negócios</span>
            <span>OAB 423996</span>
          </div>

          <div className="text-center md:text-right">
            <p>Atendimento de Segunda a Sexta</p>
            <p>Das 09h às 18h</p>
            <p className="mt-4 text-xs opacity-50">&copy; {new Date().getFullYear()} Alves Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;