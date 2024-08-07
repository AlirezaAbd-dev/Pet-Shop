import React from 'react';

import { Switch } from '@/components/ui/switch';

import { useFiltersStore } from '../../store/filters.store';

const DiscountedFilter = () => {
  const discounted = useFiltersStore((s) => s.discounted);
  const setDiscounted = useFiltersStore((s) => s.setDiscounted);

  return (
    <label
      htmlFor="only-discounted"
      className="flex justify-between items-center py-4 md:py-5 cursor-pointer border-b"
    >
      <p className="font-semibold">Discounted products</p>
      <Switch
        checked={discounted}
        onCheckedChange={() => setDiscounted(!discounted)}
        id="only-discounted"
      />
    </label>
  );
};

export default DiscountedFilter;
