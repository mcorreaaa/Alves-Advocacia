import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, theme = 'dark', className = '', id }) => {
  const bgClass = theme === 'dark' ? 'bg-corporate-dark text-gray-300' : 'bg-corporate-paper text-gray-800';
  
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${bgClass} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;