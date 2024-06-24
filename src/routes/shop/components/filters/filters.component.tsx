import React from 'react';

import {
  AccordionContentFilter,
  AccordionFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { SliderDoubleRange } from '@/components/ui/slider-double-range';
import { Switch } from '@/components/ui/switch';

import AvailableFilter from './available-filter.component';
import BrandFilter from './brand-filter.component';
import CategoryFilter from './category-filter.component';
import PriceFilter from './price-filter.component';

const Filters = () => {
  return (
    <AccordionFilter type="multiple" className="mt-3 md:mt-1">
      <PriceFilter />
      <CategoryFilter />
      <BrandFilter />
      <AvailableFilter />
    </AccordionFilter>
  );
};

export default Filters;
