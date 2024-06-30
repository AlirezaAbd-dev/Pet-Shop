'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import SvgListDoListCheckmarkRed20 from '@/assets/svg/list-do-list-checkmark-red-20.svg';
import SvgListDoListCheckmarkRed24 from '@/assets/svg/list-do-list-checkmark-red-24.svg';
import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

import OrdersCard from '../_components/cards/oreders-card.component';
import {
  ORDER_STATUS_TABS,
  OrderStatusTabsType,
} from './constants/orders.constants';

const Orders = () => {
  const [tabValue, setTabValue] = useState<OrderStatusTabsType>('Delivered');

  return (
    <>
      <Link
        href={'/dashboard/main'}
        className="md:hidden flex gap-1 items-center "
      >
        <SvgLongArrow20 />
        Orders
      </Link>
      <section className="md:mt-0 mt-8 border border-nature-900 rounded-2xl py-4 md:py-6 mb-4">
        <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 font-nunito font-bold md:text-xl">
          <Icon className="flex justify-center items-center w-9 h-9 md:w-[42px] md:h-[42px] rounded-lg bg-primary-50/5">
            <SvgListDoListCheckmarkRed20 className="md:hidden" />
            <SvgListDoListCheckmarkRed24 className="hidden md:block" />
          </Icon>
          Order history
        </div>
        <ul className="flex w-full mt-7 md:mt-11 gap-4 md:gap-10 overflow-x-auto no-scrollbar border-b border-nature-900 px-4 md:px-6">
          {ORDER_STATUS_TABS.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setTabValue(item.name);
              }}
              className={cn(
                'flex items-center gap-1 md:gap-2 pb-[15px] cursor-pointer',
                item.name === tabValue
                  ? 'underline-active text-primary-500'
                  : 'text-text-400',
              )}
            >
              <p className="text-sm md:text-lg md:font-nunito whitespace-nowrap">
                {item.name}
              </p>
              <span
                className={cn(
                  'flex justify-center items-center text-xs md:text-base bg-nature-800 rounded-[4px] w-[18px] h-[18px] md:w-[24px] md:h-[24px]',
                  item.name === tabValue ? 'bg-primary-500 text-white' : '',
                )}
              >
                5
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 mt-6 px-4">
          <OrdersCard status="In progress" />
          <OrdersCard status="In progress" />
        </ul>
      </section>
    </>
  );
};

export default Orders;
