'use client';

import React, { useState } from 'react';

import SvgCashBacknoteDesktopWhite from '@/assets/svg/cash-banknote-document-group-desktop-white.svg';
import SvgCashBacknoteDesktop from '@/assets/svg/cash-banknote-document-group-desktop.svg';
import SvgCashBacknoteMobileWhite from '@/assets/svg/cash-banknote-document-group-mobile-white.svg';
import SvgCashBacknoteMobile from '@/assets/svg/cash-banknote-document-group-mobile.svg';
import SvgShoppingBagCheckmarkDesktopWhite from '@/assets/svg/shopping-bag-checkmark_2-desktop-white.svg';
import SvgShoppingBagCheckmarkDesktop from '@/assets/svg/shopping-bag-checkmark_2-desktop.svg';
import SvgShoppingBagCheckmarkMobileWhite from '@/assets/svg/shopping-bag-checkmark_2-mobile-white.svg';
import SvgShoppingBagCheckmarkMobile from '@/assets/svg/shopping-bag-checkmark_2-mobile.svg';
import SvgShoppingBagSettingMobileWhite from '@/assets/svg/shopping-bag-setting-mobile-white.svg';
import SvgShoppingBagSettingMobile from '@/assets/svg/shopping-bag-setting-mobile.svg';
import SvgShoppingBagSettingDesktopWhite from '@/assets/svg/shopping-bag-setting_1-desktop-white.svg';
import SvgShoppingBagSettingDesktop from '@/assets/svg/shopping-bag-setting_1-desktop.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

const PROGRESS_ITEMS = [
  {
    id: 1,
    label: 'Cart',
    mobileIconActive: SvgShoppingBagSettingMobileWhite,
    mobileIcon: SvgShoppingBagSettingMobile,
    desktopIconActive: SvgShoppingBagSettingDesktopWhite,
    desktopIcon: SvgShoppingBagSettingDesktop,
  },
  {
    id: 2,
    label: 'Checkout',
    mobileIconActive: SvgCashBacknoteMobileWhite,
    mobileIcon: SvgCashBacknoteMobile,
    desktopIconActive: SvgCashBacknoteDesktopWhite,
    desktopIcon: SvgCashBacknoteDesktop,
  },
  {
    id: 3,
    label: 'Final order',
    mobileIconActive: SvgShoppingBagCheckmarkMobileWhite,
    mobileIcon: SvgShoppingBagCheckmarkMobile,
    desktopIconActive: SvgShoppingBagCheckmarkDesktopWhite,
    desktopIcon: SvgShoppingBagCheckmarkDesktop,
  },
];

type ProgressBarProps = {
  active: number;
};

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <ul className="flex justify-center gap-4 md:gap-6 mt-6 px-5">
      {PROGRESS_ITEMS.map((item, index) => (
        <li className="flex md:items-center gap-4 md:gap-6" key={item.id}>
          <div
            className={cn(
              'flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm md:text-base',
              props.active >= item.id ? 'font-bold' : '',
            )}
          >
            <Icon
              className={cn(
                'flex items-center justify-center h-9 w-9 md:w-[54px] md:h-[54px] rounded-full bg-secondary-50 text-white',
                props.active >= item.id ? 'bg-secondary-500' : '',
              )}
            >
              {props.active >= item.id ? (
                <>
                  <item.mobileIconActive className="md:hidden" />
                  <item.desktopIconActive className="hidden md:block" />
                </>
              ) : (
                <>
                  <item.mobileIcon className="md:hidden" />
                  <item.desktopIcon className="hidden md:block" />
                </>
              )}
            </Icon>
            <p className="whitespace-nowrap">{item.label}</p>
          </div>
          {index !== PROGRESS_ITEMS.length - 1 && (
            <div
              className={cn(
                'w-11 md:w-20 mt-[17px] md:mt-0 border-t-2 border-nature-900',
                props.active >= item.id ? 'border-secondary-500' : '',
              )}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
