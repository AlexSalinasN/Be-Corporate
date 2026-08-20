import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  const sizeClasses = {
    sm: 'h-9 w-auto min-w-[140px]',
    md: 'h-11 sm:h-12 w-auto min-w-[170px]',
    lg: 'h-12 sm:h-13 lg:h-14 w-auto min-w-[200px]',
    xl: 'h-16 sm:h-18 lg:h-20 w-auto min-w-[260px]',
  };

  const badgeConfig = {
    sm: { text: 'text-[15px]', sub: 'text-[7.5px]', pad: 'px-3.5 py-1.5' },
    md: { text: 'text-[18px]', sub: 'text-[8.5px]', pad: 'px-4.5 py-2.5' },
    lg: { text: 'text-[22px]', sub: 'text-[9.5px]', pad: 'px-5.5 py-3' },
    xl: { text: 'text-[28px]', sub: 'text-[11px]', pad: 'px-7 py-4' },
  };

  if (loadFailed) {
    const cfg = badgeConfig[size];
    return (
      <div
        className={`inline-flex flex-col items-center justify-center bg-[#141414] text-white rounded-[4px] font-sans select-none text-center shadow-xs ${cfg.pad} ${className}`}
      >
        <span className={`${cfg.text} font-black tracking-[-0.025em] text-white leading-none`}>
          Be Corporate
        </span>
        <span className={`${cfg.sub} font-bold tracking-[0.24em] text-white/90 uppercase mt-1`}>
          Communication Beyond Language
        </span>
      </div>
    );
  }

  return (
    <img
      src="/be-corporate-logo.svg"
      alt="Be Corporate - Communication Beyond Language"
      onError={() => setLoadFailed(true)}
      className={`object-contain select-none rounded-[4px] shadow-xs transition-transform duration-200 group-hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

