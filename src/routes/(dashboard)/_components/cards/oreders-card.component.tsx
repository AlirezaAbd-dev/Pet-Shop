import Link from 'next/link';
import React from 'react';

import SvgArrow20 from '@/assets/svg/Arrow-gray-20.svg';
import SvgArrowGray32 from '@/assets/svg/Arrow-gray-32.svg';
import Icon from '@/components/icon';

import {
  OrderStatus,
  STATUSES,
} from '../../_constants/dashboard-routes.constants';

export type OrdersCardProps = {
  status: OrderStatus;
};

const OrdersCard = (props: OrdersCardProps) => {
  return (
    <li className="w-full bg-nature-600 rounded-xl p-4 md:pr-2">
      <div className="w-full flex md:justify-between md:items-center">
        <div className="w-full grid gap-y-[22px] md:gap-x-8 grid-cols-2 place-content-between md:flex md:place-content-start md:grid-cols-4">
          <p className="text-sm md:text-lg text-text-400">
            Date: <span className="font-bold text-text-500">2024/02/26</span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            Order ID: <span className="font-bold text-text-500 "> #125692</span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            Price: <span className="font-bold text-text-500"> $29.00</span>
          </p>
          <p className="text-sm md:text-lg text-text-400">
            State:{' '}
            <span
              className={`font-bold ${STATUSES.find((s) => s.name === props.status)?.colorClassName}`}
            >
              {' '}
              {props.status}
            </span>
          </p>
        </div>
        <Link href={'/dashboard/orders/pet'}>
          <SvgArrowGray32 className="hidden md:block" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-wrap gap-5 md:gap-11">
          <img
            src="/examples/single-product-image-1.png"
            alt="product-1"
            className="w-6 h-[52px] md:h-[82px] md:w-auto"
          />
          <img
            src="/examples/single-product-image-2.png"
            alt="product-2"
            className="w-[30px] h-[52px] md:h-[82px] md:w-auto"
          />
          <img
            src="/examples/single-product-image-3.png"
            alt="product-2"
            className="w-[31px] h-[52px] md:h-[82px] md:w-auto"
          />
          <img
            src="/examples/single-product-image-3.png"
            alt="product-2"
            className="w-[31px] h-[52px] md:h-[82px] md:w-auto"
          />
        </div>
        <Link
          href={'/dashboard/orders/pet'}
          className="flex items-center text-sm text-text-300 md:hidden"
        >
          view
          <SvgArrow20 />
        </Link>
      </div>
    </li>
  );
};

export default OrdersCard;
