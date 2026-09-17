import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-13 sm:h-14 lg:h-16 w-auto',
    xl: 'h-16 sm:h-20 lg:h-24 w-auto',
  };

  const badgeConfig = {
    sm: { text: 'text-[15px]', sub: 'text-[7.5px]', pad: 'px-3.5 py-1.5 min-w-[140px]' },
    md: { text: 'text-[18px]', sub: 'text-[8.5px]', pad: 'px-4.5 py-2.5 min-w-[170px]' },
    lg: { text: 'text-[22px]', sub: 'text-[9.5px]', pad: 'px-5.5 py-3 min-w-[200px]' },
    xl: { text: 'text-[28px]', sub: 'text-[11px]', pad: 'px-7 py-4 min-w-[260px]' },
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
      src="/Logooficial.jpg"
      alt="Be Corporate - Communication Beyond Language"
      onError={() => setLoadFailed(true)}
      className={`object-contain select-none rounded-[4px] shadow-xs transition-transform duration-200 group-hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

