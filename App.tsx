import React, { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServicesPage from './components/ServicesPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServices = () => {
    setCurrentPage('services');
    scrollToTop();
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    scrollToTop();
  };

  if (currentPage === 'services') {
    return (
      <div className="font-sans selection:bg-corporate-petrol selection:text-white">
        <ServicesPage onBack={handleNavigateToHome} />
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-corporate-petrol selection:text-white">
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Services onShowDetails={handleNavigateToServices} />

        {/* Trust/Commitment Section embedded directly for flow */}
        <section className="bg-corporate-paper py-20 px-6 border-t border-gray-200">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-corporate-petrol mb-4">Compromisso</h3>
            <h2 className="text-3xl text-corporate-dark mb-6">Atendimento Profissional e Transparente</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mesmo sem expor nossos clientes publicamente por questões de sigilo, nosso compromisso é simples: explicar, orientar e proteger você em cada etapa do contrato.
            </p>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;