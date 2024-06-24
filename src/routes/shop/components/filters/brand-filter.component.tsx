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
        <label htmlFor="Acana" className="flex items-center gap-3">
          <Checkbox id="Acana" variant={'dark'} />
          Acana
        </label>
        <label htmlFor="Capstar" className="flex items-center gap-3">
          <Checkbox id="Capstar" variant={'dark'} />
          Capstar
        </label>
        <label htmlFor="Higgins" className="flex items-center gap-3">
          <Checkbox id="Higgins" variant={'dark'} />
          Higgins
        </label>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default BrandFilter;
