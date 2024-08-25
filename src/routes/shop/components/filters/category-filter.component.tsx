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
  const subCategoriesList = useFiltersStore((s) => s.filters.subCategories);
  const subCategoriesSelected = useFiltersStore((s) => s.subCategory);
  const categoriesSelected = useFiltersStore((s) => s.category);
  const setCategory = useFiltersStore((s) => s.setCategory);
  const setSubCategory = useFiltersStore((s) => s.setSubCategory);
  const fillInstantSubCategory = useFiltersStore(
    (s) => s.fillInstantSubCategories,
  );
  const clearInstantSubCategory = useFiltersStore(
    (s) => s.clearInstantSubCategories,
  );

  return (
    <AccordionItemFilter value="category">
      <AccordionTriggerFilter>Category</AccordionTriggerFilter>
      <AccordionContentFilter className="flex flex-col gap-4 p-1 pb-4 text-sm md:text-base">
        {categoriesList.map((c) => (
          <>
            <label
              key={c.id}
              htmlFor={String(c.id)}
              className="flex items-center gap-3"
            >
              <Checkbox
                checked={categoriesSelected.includes(c.id)}
                onCheckedChange={(checked) => {
                  setCategory(c.id);
                  if (checked) {
                    fillInstantSubCategory(
                      subCategoriesList
                        .filter((s) => s.category === c.id)
                        .map((s) => s.id),
                    );
                  } else {
                    clearInstantSubCategory(
                      subCategoriesList
                        .filter((s) => s.category === c.id)
                        .map((s) => s.id),
                    );
                  }
                }}
                id={String(c.id)}
                variant={'dark'}
              />
              {c.name}
            </label>
            {categoriesSelected.includes(c.id) &&
              subCategoriesList
                .filter((s) => s.category === c.id)
                .map((s) => (
                  <label
                    key={s.id}
                    htmlFor={String(s.id)}
                    className="flex items-center gap-3 px-5"
                  >
                    <Checkbox
                      checked={subCategoriesSelected.includes(s.id)}
                      onCheckedChange={() => {
                        setSubCategory(s.id);
                      }}
                      id={String(s.id)}
                      variant={'dark'}
                    />
                    {s.name}
                  </label>
                ))}
          </>
        ))}
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default CategoryFilter;
