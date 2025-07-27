import { ReactNode, createElement } from 'react';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  font?: 'figtree' | 'urbanist';
  className?: string;
}

const variantClasses = {
  h1: 'text-4xl md:text-6xl font-bold',
  h2: 'text-3xl md:text-5xl font-bold',
  h3: 'text-2xl md:text-4xl font-semibold',
  h4: 'text-xl md:text-3xl font-semibold',
  h5: 'text-lg md:text-2xl font-medium',
  h6: 'text-base md:text-xl font-medium',
  body: 'text-sm md:text-base',
  caption: 'text-xs md:text-sm text-gray-600',
};

const fontClasses = {
  figtree: 'font-figtree',
  urbanist: 'font-urbanist',
};

export default function Typography({ 
  children, 
  variant = 'body', 
  font = 'figtree',
  className = '' 
}: TypographyProps) {
  const element = variant.startsWith('h') ? variant : 'p';
  
  return createElement(
    element,
    {
      className: `${variantClasses[variant]} ${fontClasses[font]} ${className}`
    },
    children
  );
}
