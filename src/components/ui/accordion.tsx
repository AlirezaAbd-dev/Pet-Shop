'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-none', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between gap-6 p-3 font-normal leading-[26px] md:text-lg transition-all [&[data-state=open]>span>.plus]:hidden [&[data-state=closed]>span>.minus]:hidden data-[state=open]:font-semibold bg-nature-600 rounded-xl md:rounded-2xl text-left outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <span className="flex justify-center items-center rounded-lg md:rounded-xl bg-primary-500 min-w-8 min-h-8 md:min-w-10 md:min-h-10">
          <Plus className="plus h-6 w-6 shrink-0 transition-transform duration-200 text-white" />
          <Minus className="minus h-6 w-6 shrink-0 transition-transform duration-200 text-white" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm md:text-base leading-[165%] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-nature-600 rounded-xl px-3"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
