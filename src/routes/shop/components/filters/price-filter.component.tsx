import { useEffect, useState } from 'react';

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

  const [minPrice, setMinPrice] = useState(price.min);
  const [maxPrice, setMaxPrice] = useState(price.max);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrice({ min: minPrice, max: maxPrice });
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [minPrice, maxPrice]);

  return (
    <AccordionItemFilter value="price">
      <AccordionTriggerFilter>Price range</AccordionTriggerFilter>
      <AccordionContentFilter>
        <SliderDoubleRange
          min={1}
          max={10000}
          value={[minPrice, maxPrice]}
          onValueChange={(values) => {
            setMinPrice(values[0]);
            setMaxPrice(values[1]);
          }}
          className="mt-2"
        />
        <div className="flex justify-between mt-3">
          <p>${minPrice.toFixed(2)}</p>
          <p>${maxPrice.toFixed(2)}</p>
        </div>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default PriceFilter;
