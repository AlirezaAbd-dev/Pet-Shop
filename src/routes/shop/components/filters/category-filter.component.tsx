import React from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Checkbox } from '@/components/ui/checkbox';

const CategoryFilter = () => {
  return (
    <AccordionItemFilter value="category">
      <AccordionTriggerFilter>Category</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Toys
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Resting places
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          At home
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          On tour
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Food
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Training and sport
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Resting places
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Health/care and hygiene/vet
        </div>
        <div className="flex items-center gap-3">
          <Checkbox variant={'dark'} />
          Snack and supplementary food
        </div>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default CategoryFilter;
