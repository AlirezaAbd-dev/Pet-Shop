'use client';

import { Toaster as Sonner } from 'sonner';

import SvgCheckmarkCircleDesktop from '@icons/checkmark-circle-success-desktop.svg';
import SvgCheckmarkCircleMobile from '@icons/checkmark-circle-success.svg';
import SvgInfoErrorDesktop from '@icons/info-infornation-error-desktop.svg';
import SvgInfoErrorMobile from '@icons/info-infornation-error-mobile.svg';

import Icon from '../icon';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={'light'}
      className="toaster group"
      position="top-left"
      icons={{
        success: (
          <Icon>
            <SvgCheckmarkCircleMobile className="md:hidden" />
            <SvgCheckmarkCircleDesktop className="hidden md:inline" />
          </Icon>
        ),
        error: (
          <Icon>
            <SvgInfoErrorMobile className="md:hidden" />
            <SvgInfoErrorDesktop className="hidden md:inline" />
          </Icon>
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:py-3 group-[.toaster]:md:py-4 group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:justify-center group-[.toaster]:gap-2 group-[.toaster]:md:gap-3 group-[.toaster]:w-[320px] group-[.toaster]:md:w-[486px] group-[.toaster]:font-normal group-[.toaster]:text-sm group-[.toaster]:md:text-base',
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
