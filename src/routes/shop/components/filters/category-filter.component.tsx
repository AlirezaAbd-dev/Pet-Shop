import React from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Checkbox } from '@/components/ui/checkbox';

import { useFiltersStore } from '../../store/filters.store';

const CategoryFilter = () => {
  const categoriesList = useFiltersStore((s) => s.filters.categories);
  const categoriesSelected = useFiltersStore((s) => s.category);
  const setCategory = useFiltersStore((s) => s.setCategory);

  return (
    <AccordionItemFilter value="category">
      <AccordionTriggerFilter>Category</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        {categoriesList.map((c) => (
          <label
            key={c.id}
            htmlFor={String(c.id)}
            className="flex items-center gap-3"
          >
            <Checkbox
              checked={categoriesSelected.includes(c.id)}
              onCheckedChange={() => {
                setCategory(c.id);
              }}
              id={String(c.id)}
              variant={'dark'}
            />
            {c.name}
          </label>
        ))}
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default CategoryFilter;
