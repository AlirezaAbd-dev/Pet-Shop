import React from 'react';

import SvgDeleteDisabled from '@/assets/svg/delete-disabled-mobile.svg';
import SvgDiceThree from '@/assets/svg/dice-three-mobile.svg';
import SvgDoneChecked from '@/assets/svg/done-check-mobile.svg';
import Icon from '@/components/icon';

import { OrderSummaryType } from '../dashboard.query';

type OrderSummaryProps = {
  summary: OrderSummaryType;
};

const OrdersSummary = (props: OrderSummaryProps) => {
  return (
    <section className="flex justify-between md:justify-start md:gap-6 mt-8 md:mt-0">
      <div className="md:w-full flex flex-col md:flex-row md:py-3 md:px-4 items-center gap-3 md:border border-nature-900 md:rounded-2xl">
        <Icon className="flex justify-center items-center w-[52px] h-[52px] rounded-xl bg-warning-500/5">
          <SvgDiceThree />
        </Icon>
        <div>
          <p className="text-center md:text-left text-sm md:text-base">
            {(props.summary?.pending || 0) + (props.summary?.shipped || 0)}{' '}
            Order
          </p>
          <p className="text-center md:text-left text-sm md:text-base font-bold mt-2">
            In Progress
          </p>
        </div>
      </div>
      <div className="md:w-full flex flex-col md:flex-row md:py-3 md:px-4 items-center gap-3 md:border border-nature-900 md:rounded-2xl">
        <Icon className="flex justify-center items-center w-[52px] h-[52px] rounded-xl bg-success-500/5">
          <SvgDoneChecked />
        </Icon>
        <div>
          <p className="text-center md:text-left text-sm md:text-base">
            {props.summary?.delivered || 0} Order
          </p>
          <p className="text-center md:text-left text-sm md:text-base font-bold mt-2">
            Delivered
          </p>
        </div>
      </div>
      <div className="md:w-full flex flex-col md:flex-row md:py-3 md:px-4 items-center gap-3 md:border border-nature-900 md:rounded-2xl">
        <Icon className="flex justify-center items-center w-[52px] h-[52px] rounded-xl bg-error-500/5">
          <SvgDeleteDisabled />
        </Icon>
        <div>
          <p className="text-center md:text-left text-sm md:text-base">
            {props.summary?.cancelled || 0} Order
          </p>
          <p className="text-center md:text-left text-sm md:text-base font-bold mt-2">
            Canceled
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrdersSummary;
