import React from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Checkbox } from '@/components/ui/checkbox';

import { useFiltersStore } from '../../store/filters.store';

const PetFilter = () => {
  const petsList = useFiltersStore((s) => s.filters.pets);
  const petsSelected = useFiltersStore((s) => s.pet);
  const setPet = useFiltersStore((s) => s.setPet);

  return (
    <AccordionItemFilter value="pet">
      <AccordionTriggerFilter>Pet</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        {petsList.map((c) => (
          <label
            key={c.id}
            htmlFor={String(c.id)}
            className="flex items-center gap-3"
          >
            <Checkbox
              checked={petsSelected.includes(c.id)}
              onCheckedChange={() => {
                setPet(c.id);
              }}
              id={String(c.id)}
              variant={'dark'}
            />
            {c.species}
          </label>
        ))}
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default PetFilter;
