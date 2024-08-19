import React from 'react';

import { Switch } from '@/components/ui/switch';

import { useFiltersStore } from '../../store/filters.store';

const PromotionFilter = () => {
  const promotion = useFiltersStore((s) => s.promotion);
  const setPromotion = useFiltersStore((s) => s.setPromotion);

  return (
    <label
      htmlFor="only-promotions"
      className="flex justify-between items-center py-4 md:py-5 cursor-pointer border-b"
    >
      <p className="font-semibold">Promotion products</p>
      <Switch
        checked={promotion}
        onCheckedChange={() => setPromotion(!promotion)}
        id="only-promotions"
      />
    </label>
  );
};

export default PromotionFilter;
