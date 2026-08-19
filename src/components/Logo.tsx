import React from 'react';

interface LogoProps {
  variant?: 'black' | 'light' | 'white-on-dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'black', className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'text-sm px-3.5 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-xl md:text-2xl px-5 py-2.5',
    xl: 'text-2xl md:text-3xl px-6 py-3',
  };

  return (
    <div
      className={`inline-flex items-center justify-center bg-[#000000] text-white rounded-[4px] font-extrabold tracking-[-0.035em] font-['Inter'] shadow-md select-none transition-transform hover:scale-[1.01] ${sizeClasses[size]} ${className}`}
    >
      <span className="leading-none tracking-tight">Be Corporate</span>
    </div>
  );
};
