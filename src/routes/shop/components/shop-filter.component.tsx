'use client';

import React from 'react';

import Icon from '@/components/icon';
import {
  AccordionContentFilter,
  AccordionFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Input } from '@/components/ui/input';
import { SliderDoubleRange } from '@/components/ui/slider-double-range';
import { Switch } from '@/components/ui/switch';

import SvgSearch from '@icons/search-loupe-custom.svg';

import Filters from './filters/filters.component';

const ShopFilter = () => {
  return (
    <main className="hidden md:flex flex-col col-span-3 h-min border border-nature-800 rounded-3xl px-4 pb-1">
      <div className="w-full flex justify-between items-center mt-6">
        <p className="font-bold text-xl">Filters</p>
        <p className="text-text-300">Reset</p>
      </div>
      <div className="flex items-center mt-6 gap-1 md:gap-2 w-full h-11 md:h-12 bg-nature-600 rounded-2xl px-3">
        <Icon className="text-text-200">
          <SvgSearch className="hidden md:block w-8 h-8" />
        </Icon>
        <Input
          placeholder="Search product..."
          className="bg-transparent placeholder:text-text-200 font-nunito border-none text-base"
        />
      </div>
      <Filters />
    </main>
  );
};

export default ShopFilter;
