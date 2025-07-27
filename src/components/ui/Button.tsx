import { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  font?: 'figtree' | 'urbanist';
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
  outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
  ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
  danger: 'text-white hover:opacity-90 active:opacity-80',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const fontClasses = {
  figtree: 'font-figtree',
  urbanist: 'font-urbanist',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  font = 'figtree',
  className = '',
  style,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const isDanger = variant === 'danger';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...(isDanger ? { backgroundColor: '#FC004E' } : {}),
        ...style
      }}
      className={`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fontClasses[font]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
