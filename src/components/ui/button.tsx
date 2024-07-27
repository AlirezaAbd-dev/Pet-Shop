import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import LoadingSpinner from './loading-spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base md:text-lg outline-none md:outline-none font-medium md:font-bold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-500 text-white hover:bg-primary-500/90 dark:bg-primary-50 dark:text-primary-500 dark:hover:bg-primary-50/90',
        'primary-deactive':
          'bg-primary-50/5 text-text-500 hover:bg-primary-500/10',
        outline:
          'border border-primary-500 bg-transparent hover:bg-primary-50/5 text-primary-500 hover:text-primary-700 dark:border-primary-800',
        'outline-gray':
          'border border-text-200 bg-transparent hover:bg-text-200/5 text-text-500 hover:text-text-700 outline-none',
        secondary:
          'bg-secondary-500 text-secondary-50 hover:bg-secondary-500/80',
        confirm: 'bg-success-500 text-white hover:bg-success-500/80',
        disabled:
          'bg-white border border-nature-900 text-nature-900 cursor-now-allowed shadow-md',
        text: 'hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-50',
        link: 'text-primary-900 underline-offset-4 hover:underline dark:text-primary-50',
      },
      size: {
        default: 'h-[44px] md:h-[54px] px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <LoadingSpinner className="scale-50" />}
        {!isLoading && props.children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
