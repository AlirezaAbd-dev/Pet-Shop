import React from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Checkbox } from '@/components/ui/checkbox';

const BrandFilter = () => {
  return (
    <AccordionItemFilter value="brand">
      <AccordionTriggerFilter>Brand</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Acana
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Capstar
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Higgins
        </div>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default BrandFilter;
