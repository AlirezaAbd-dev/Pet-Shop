import React from 'react';

import { Switch } from '@/components/ui/switch';

import { useFiltersStore } from '../../store/filters.store';

const AvailableFilter = () => {
  const available = useFiltersStore((s) => s.available);
  const setAvailable = useFiltersStore((s) => s.setAvailable);

  return (
    <label
      htmlFor="only-available"
      className="flex justify-between items-center py-4 md:py-5 cursor-pointer"
    >
      <p className="font-semibold">Only available items</p>
      <Switch
        checked={available}
        onCheckedChange={() => setAvailable(!available)}
        id="only-available"
      />
    </label>
  );
};

export default AvailableFilter;
