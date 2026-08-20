import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto min-w-[130px]',
    md: 'h-10 w-auto min-w-[160px]',
    lg: 'h-12 sm:h-13 w-auto min-w-[190px]',
    xl: 'h-14 sm:h-16 w-auto min-w-[230px]',
  };

  return (
    <img
      src="/be-corporate-logo.svg"
      alt="Be Corporate - Communication Beyond Language"
      className={`object-contain select-none rounded-[4px] shadow-xs transition-transform duration-200 group-hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
