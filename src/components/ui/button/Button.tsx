import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50',
      ghost: 'bg-transparent hover:bg-gray-100',
      link: 'text-indigo-600 underline-offset-4 hover:underline',
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;