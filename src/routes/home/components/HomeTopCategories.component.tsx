'use client';

import React, { useState } from 'react';

import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

import {
  CATEGORIES_LIST,
  CategoiesListType,
} from '../constants/home.constants';

const HomeTopCategories = () => {
  const [categoryValue, setCategoryValue] = useState<CategoiesListType>('All');

  return (
    <section className="mt-12">
      <h3 className="text-xl font-nunito font-black text-center">
        Top Categories & Food products
      </h3>
      <ul className="flex justify-center mt-5 gap-4">
        {CATEGORIES_LIST.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              setCategoryValue(item.name);
            }}
            className={cn(
              'flex items-center gap-2 px-4 py-3 rounded-full border border-nature-900 cursor-pointer transition-all delay-75',
              item.name === categoryValue
                ? 'border-primary-500 font-extrabold text-primary-500'
                : '',
            )}
          >
            <Icon
              className={cn(
                'flex justify-center items-center rounded-full w-7 h-7 bg-nature-800 transition-all delay-75',
                item.name === categoryValue ? 'bg-primary-500' : '',
              )}
            >
              {item.name === categoryValue ? (
                <item.activeIcon className="w-5 h-5" />
              ) : (
                <item.icon className="w-5 h-5" />
              )}
            </Icon>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeTopCategories;
