'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface IconProps extends React.ComponentProps<'span'> {}

export default function Icon({ children, className, ...props }: IconProps) {
  return (
    <span
      {...props}
      className={cn('[&_svg]:text-current [&_svg]:fill-current', className)}
    >
      {children}
    </span>
  );
}
