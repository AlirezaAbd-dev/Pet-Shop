import React from 'react';

import { cn } from '@/lib/utils';

import SvgPhoneCall from '@icons/Phone, Call.svg';
import SvgStarDesktop from '@icons/Star-desktop.svg';
import SvgDeliveryTruckDesktop from '@icons/delivery-truck-fast-desktop.svg';
import SvgDeliveryTruck from '@icons/delivery-truck-fast.svg';
import SvgMessageChatMoreDesktop from '@icons/message-chat-more-dots_2-desktop.svg';
import SvgMessageChatMore from '@icons/message-chat-more-dots_2.svg';
import SvgPhoneCallDesktop from '@icons/phone-call-desktop.svg';
import SvgShopDesktop from '@icons/shop-desktop.svg';
import SvgShop from '@icons/shop.svg';
import SvgStar from '@icons/star.svg';

import Icon from '../icon';

type ShopSecificationsProps = {
  className?: string;
};

const ShopSpecifications = (props: ShopSecificationsProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col md:flex-row md:justify-between md:items-center gap-6',
        props.className,
      )}
    >
      <li className="flex gap-3 md:items-center">
        <Icon>
          <SvgDeliveryTruck className="md:hidden w-8 h-8" />
          <SvgDeliveryTruckDesktop className="hidden md:block w-9 h-9" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base">Same day delivery</p>
          <p className="text-sm md:text-base font-semibold">
            for order beore 11:00h!
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>
      <li className="flex gap-3 md:items-center">
        <Icon>
          <SvgShop className="md:hidden w-8 h-8" />
          <SvgShopDesktop className="hidden md:block w-9 h-9" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base">Free pick up from</p>
          <p className="text-sm md:text-base font-semibold">
            1000S 8th Avenue, NY!
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>

      <li className="flex gap-3 md:items-center">
        <Icon>
          <SvgStar className="md:hidden w-8 h-8" />
          <SvgStarDesktop className="hidden md:block w-9 h-9" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base">Rating 4.8/5!</p>
          <p className="text-sm md:text-base font-semibold">
            from verified users
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>

      <li className="flex gap-3 md:items-center">
        <Icon>
          <SvgPhoneCall className="md:hidden w-8 h-8" />
          <SvgPhoneCallDesktop className="hidden md:block w-9 h-9" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base">Call us in 09:00-16:00h</p>
          <p className="text-sm md:text-base font-semibold">1-800-356-8933</p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>

      <li className="flex gap-3 md:items-center">
        <Icon>
          <SvgMessageChatMore className="md:hidden w-8 h-8" />
          <SvgMessageChatMoreDesktop className="hidden md:block w-9 h-9" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base">Message us,</p>
          <p className="text-sm md:text-base font-semibold">
            respond same day!
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ShopSpecifications;
