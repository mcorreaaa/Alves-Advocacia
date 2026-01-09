import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center py-4 px-8 text-sm uppercase tracking-widest font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-petrol disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-corporate-petrol text-white hover:bg-corporate-petrolDark hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-corporate-petrol border border-corporate-petrol hover:bg-corporate-petrol hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] border border-transparent shadow-md hover:shadow-xl"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;