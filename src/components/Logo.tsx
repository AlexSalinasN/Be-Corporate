import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const configs = {
    sm: {
      padding: 'px-3 py-1.5',
      title: 'text-sm font-black tracking-tight leading-tight',
      subtitle: 'text-[7px] tracking-[0.18em] font-semibold text-slate-200 mt-0.5',
    },
    md: {
      padding: 'px-4 py-2',
      title: 'text-base font-black tracking-tight leading-tight',
      subtitle: 'text-[8px] tracking-[0.2em] font-semibold text-slate-200 mt-0.5',
    },
    lg: {
      padding: 'px-5 py-2.5',
      title: 'text-xl sm:text-2xl font-black tracking-tight leading-none',
      subtitle: 'text-[8.5px] sm:text-[9.5px] tracking-[0.22em] font-semibold text-slate-200 mt-1',
    },
    xl: {
      padding: 'px-7 py-4',
      title: 'text-2xl sm:text-3xl font-black tracking-tight leading-none',
      subtitle: 'text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold text-slate-200 mt-1.5',
    },
  };

  const current = configs[size];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center bg-[#0D0D0D] text-white rounded-md font-['Inter'] shadow-md select-none text-center ${current.padding} ${className}`}
    >
      <span className={`${current.title} text-white`}>Be Corporate</span>
      <span className={`${current.subtitle} uppercase`}>Communication Beyond Language</span>
    </div>
  );
};
