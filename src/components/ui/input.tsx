import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button';

const inputVariants = cva(
  'flex h-[44px] md:h-[48px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-nature-600 bg-nature-600 text-text-500 placeholder:text-[#A0A0A1] rounded-xl disabled:border-[#F7F7F7] disabled:text-text-200',
        error: 'border-[#FF8787]',
        success: 'border-[#4ACF98]',
        warning: 'border-[#F4D36A]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, errorText, ...props }, ref) => {
    return (
      <>
        <div className="w-full">
          <input
            type={type}
            className={cn(inputVariants({ variant, className }))}
            ref={ref}
            {...props}
          />
          {errorText && (
            <p className="text-error-400 mt-2 text-xs">{errorText}</p>
          )}
        </div>
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input };
