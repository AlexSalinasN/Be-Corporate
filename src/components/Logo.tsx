import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-auto min-w-[130px]',
    md: 'h-10 w-auto min-w-[160px]',
    lg: 'h-12 sm:h-13 w-auto min-w-[190px]',
    xl: 'h-14 sm:h-16 w-auto min-w-[230px]',
  };

  const badgeConfig = {
    sm: { text: 'text-[14px]', sub: 'text-[7px]', pad: 'px-3 py-1.5' },
    md: { text: 'text-[16px]', sub: 'text-[8px]', pad: 'px-4 py-2' },
    lg: { text: 'text-[20px]', sub: 'text-[9px]', pad: 'px-5 py-2.5' },
    xl: { text: 'text-[24px]', sub: 'text-[10px]', pad: 'px-6 py-3' },
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

