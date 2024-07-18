'use client';

import { X } from 'lucide-react';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useFilterModalStore } from '@/routes/shop/store/filter-moda.store';
import { useFiltersStore } from '@/routes/shop/store/filters.store';

import Filters from '../../filters/filters.component';

const FilterModal = () => {
  const isModalOpen = useFilterModalStore((s) => s.isModalOpen);
  const setIsModalOpen = useFilterModalStore((s) => s.setIsModalOpen);

  const resetFilter = useFiltersStore((s) => s.resetFilter);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsModalOpen(false);
    });
  }, []);

  return (
    <Dialog open={isModalOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="flex flex-col justify-between bg-white h-full px-0 pt-6 pb-0"
      >
        <div className="flex flex-col px-5 overflow-y-auto no-scrollbar">
          <div
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="flex items-center gap-3 font-bold"
          >
            <X className="w-4 h-4" />
            Filters
          </div>
          <Filters />
        </div>
        <div className="w-full flex gap-4 px-5 py-3 border-t border-nature-900">
          <Button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="w-full rounded-lg text-sm font-semibold"
          >
            View products
          </Button>
          <Button
            className="w-full rounded-lg text-sm font-semibold"
            variant={'outline'}
            onClick={() => resetFilter()}
          >
            Remove filter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
