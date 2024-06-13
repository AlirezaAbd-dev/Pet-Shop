'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={'light'}
      className="toaster group"
      position="top-center"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:justify-center  group-[.toaster]:w-[320px] group-[.toaster]:md:w-[486px] group-[.toaster]:font-normal group-[.toaster]:text-sm group-[.toaster]:md:text-base',
          success:
            'group-[.toaster]:bg-success-50 group-[.toaster]:text-success-500',
          error: 'group-[.toaster]:bg-error-50 group-[.toaster]:text-error-500',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
