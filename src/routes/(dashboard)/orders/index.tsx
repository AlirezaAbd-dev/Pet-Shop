'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import SvgListDoListCheckmarkRed20 from '@/assets/svg/list-do-list-checkmark-red-20.svg';
import SvgListDoListCheckmarkRed24 from '@/assets/svg/list-do-list-checkmark-red-24.svg';
import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import Icon from '@/components/icon';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { cn } from '@/lib/utils';

import OrdersCard from '../_components/cards/oreders-card.component';
import {
  ORDER_STATUS_TABS,
  OrderStatusTabsType,
} from './constants/orders.constants';
import useOrdersQuery from './orders.query';

const Orders = () => {
  const [tabValue, setTabValue] = useState<OrderStatusTabsType>('Delivered');

  const { data, isPending } = useOrdersQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    const orders = data.filter((o) => o.status === tabValue.toLowerCase());

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
          <ul className="flex w-full mt-7 md:mt-11 gap-4 md:gap-10 overflow-x-scroll border-b border-nature-900 px-4 md:px-6">
            {ORDER_STATUS_TABS.map((item) => {
              const orderCount = data.filter(
                (o) => o.status === item.name.toLowerCase(),
              ).length;

              return (
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
                    {orderCount}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-5 mt-6 px-4">
            {orders.length === 0 && (
              <p className="font-semibold text-center h-[500px]">
                Nothing to show
              </p>
            )}
            {orders.map((o) => (
              <OrdersCard
                key={o.id}
                status={o.status}
                date={o.created_at}
                orderId={o.id}
                price={o.total_price}
                orderItem={o.order_items}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
};

export default Orders;
