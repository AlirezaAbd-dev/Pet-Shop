import { AccordionFilter } from '@/components/ui/accordion-filter';

import AvailableFilter from './available-filter.component';
import BrandFilter from './brand-filter.component';
import CategoryFilter from './category-filter.component';
import DiscountedFilter from './discounted-filter.component';
import PriceFilter from './price-filter.component';

const Filters = () => {
  return (
    <AccordionFilter type="multiple" className="mt-3 md:mt-1">
      <PriceFilter />
      <CategoryFilter />
      <BrandFilter />
      <DiscountedFilter />
      <AvailableFilter />
    </AccordionFilter>
  );
};

export default Filters;
