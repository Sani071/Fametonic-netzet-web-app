import { ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ 
  children, 
  className = '' 
}: ResponsiveContainerProps) {
  return (
    <div className={`
      w-full 
      mx-auto 
      px-4 
      sm:px-6 
      lg:px-8
      max-w-[390px] 
      min-h-[1007px]
      md:max-w-[1440px] 
      md:min-h-[805px]
      ${className}
    `}>
      {children}
    </div>
  );
}
