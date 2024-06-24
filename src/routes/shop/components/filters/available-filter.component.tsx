import React from 'react';

import { Switch } from '@/components/ui/switch';

const AvailableFilter = () => {
  return (
    <label
      htmlFor="only-available"
      className="flex justify-between items-center py-4 md:py-5 cursor-pointer"
    >
      <p className="font-semibold">Only available items</p>
      <Switch id="only-available" />
    </label>
  );
};

export default AvailableFilter;
