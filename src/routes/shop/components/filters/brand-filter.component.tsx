import React from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Checkbox } from '@/components/ui/checkbox';

import { useFiltersStore } from '../../store/filters.store';

const BrandFilter = () => {
  const brandsList = useFiltersStore((s) => s.filters.brands);
  const brands = useFiltersStore((s) => s.brand);
  const setBrands = useFiltersStore((s) => s.setBrand);

  return (
    <AccordionItemFilter value="brand">
      <AccordionTriggerFilter>Brand</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        {brandsList.map((b) => (
          <label
            key={b.id}
            htmlFor={String(b.id)}
            className="flex items-center gap-3"
          >
            <Checkbox
              checked={brands.includes(b.id)}
              onCheckedChange={() => {
                setBrands(b.id);
              }}
              id={String(b.id)}
              variant={'dark'}
            />
            {b.name}
          </label>
        ))}
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default BrandFilter;
