import { debounce } from 'lodash';
import React, { useState } from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { SliderDoubleRange } from '@/components/ui/slider-double-range';

import { useFiltersStore } from '../../store/filters.store';

const PriceFilter = () => {
  const price = useFiltersStore((s) => s.price);
  const setPrice = useFiltersStore((s) => s.setPrice);

  const onPriceChange = debounce((values: number[]) => {
    setPrice({ min: values[0], max: values[1] });
  }, 100);

  return (
    <AccordionItemFilter value="price">
      <AccordionTriggerFilter>Price range</AccordionTriggerFilter>
      <AccordionContentFilter>
        <SliderDoubleRange
          min={1}
          max={1000}
          value={[price.min, price.max]}
          onValueChange={(values) => {
            onPriceChange(values);
          }}
          className="mt-2"
        />
        <div className="flex justify-between mt-3">
          <p>${price.min.toFixed(2)}</p>
          <p>${price.max.toFixed(2)}</p>
        </div>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default PriceFilter;
