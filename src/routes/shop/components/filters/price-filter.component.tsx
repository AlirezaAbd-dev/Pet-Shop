import React, { useState } from 'react';

import {
  AccordionContentFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { SliderDoubleRange } from '@/components/ui/slider-double-range';

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  return (
    <AccordionItemFilter value="price">
      <AccordionTriggerFilter>Price range</AccordionTriggerFilter>
      <AccordionContentFilter>
        <SliderDoubleRange
          min={0}
          max={1000}
          defaultValue={[minValue, maxValue]}
          onValueChange={(values) => {
            setMinValue(values[0]);
            setMaxValue(values[1]);
          }}
          className="mt-2"
        />
        <div className="flex justify-between mt-3">
          <p>${minValue.toFixed(2)}</p>
          <p>${maxValue.toFixed(2)}</p>
        </div>
      </AccordionContentFilter>
    </AccordionItemFilter>
  );
};

export default PriceFilter;
