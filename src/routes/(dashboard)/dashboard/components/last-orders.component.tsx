import React from 'react';

import SvgArrow24 from '@/assets/svg/Arrow-24.svg';
import SvgArrow32 from '@/assets/svg/Arrow-32.svg';
import SvgArrow20 from '@/assets/svg/Arrow-gray-20.svg';
import SvgArrowGray32 from '@/assets/svg/Arrow-gray-32.svg';
import SvgShoppingCartDesktop from '@/assets/svg/shopping-bag-list-desktop.svg';
import SvgShoppingCartMobile from '@/assets/svg/shopping-bag-list-mobile.svg';
import Icon from '@/components/icon';

import OrdersCard from '../../_components/cards/oreders-card.component';

const LastOrders = () => {
  return (
    <section className="mt-8 md:mt-6 border border-nature-900 rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3 font-bold font-nunito md:text-xl">
          <Icon className="flex justify-center items-center w-9 h-9 md:h-[42px] md:w-[42px] rounded-lg bg-primary-50/5">
            <SvgShoppingCartMobile className="md:hidden" />
            <SvgShoppingCartDesktop className="hidden md:block" />
          </Icon>
          Your last order
        </div>
        <div className="flex items-center text-sm md:text-base font-nunito text-link">
          All order
          <SvgArrow24 className="md:hidden" />
          <SvgArrow32 className="hidden md:block" />
        </div>
      </div>
      <ul className="flex flex-col gap-5 mt-6 md:mt-8">
        <OrdersCard status="In progress" />
        <OrdersCard status="Cancelled" />
        <OrdersCard status="Paid" />
        <OrdersCard status="Delivered" />
      </ul>
    </section>
  );
};

export default LastOrders;
