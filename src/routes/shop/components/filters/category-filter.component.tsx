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
        <label htmlFor="Toys" className="flex items-center gap-3">
          <Checkbox id="Toys" variant={'dark'} />
          Toys
        </label>
        <label htmlFor="Resting places" className="flex items-center gap-3">
          <Checkbox id="Resting places" variant={'dark'} />
          Resting places
        </label>
        <label htmlFor="At home" className="flex items-center gap-3">
          <Checkbox id="At home" variant={'dark'} />
          At home
        </label>
        <label htmlFor="On tour" className="flex items-center gap-3">
          <Checkbox id="On tour" variant={'dark'} />
          On tour
        </label>
        <label htmlFor="Food" className="flex items-center gap-3">
          <Checkbox id="Food" variant={'dark'} />
          Food
        </label>
        <label htmlFor="Training and sport" className="flex items-center gap-3">
          <Checkbox id="Training and sport" variant={'dark'} />
          Training and sport
        </label>
        <label htmlFor="Resting places" className="flex items-center gap-3">
          <Checkbox id="Resting places" variant={'dark'} />
          Resting places
        </label>
        <label
          htmlFor="Health/care and hygiene/vet"
          className="flex items-center gap-3"
        >
          <Checkbox id="Health/care and hygiene/vet" variant={'dark'} />
          Health/care and hygiene/vet
        </label>
        <label
          htmlFor="Snack and supplementary food"
          className="flex items-center gap-3"
        >
          <Checkbox id="Snack and supplementary food" variant={'dark'} />
          Snack and supplementary food
        </label>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default CategoryFilter;
