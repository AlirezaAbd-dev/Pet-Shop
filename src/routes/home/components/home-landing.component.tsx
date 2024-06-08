import Image from 'next/image';
import React from 'react';

import SvgCurvedArrowDesktop from '@/assets/svg/curved-arrow-desktop.svg';
import SvgCurvedArrowMobile from '@/assets/svg/curved-arrow-mobile.svg';
import SvgMiniPetDesktop from '@/assets/svg/mini-pet-desktop.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import SvgPetFingersMobile from '@/assets/svg/pet-fingers-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

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

const HomeLanding = () => {
  return (
    <main className="px-5 md:px-20 pt-6 md:pt-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="flex flex-col md:mt-16">
            <h1 className="font-nunito font-extrabold text-2xl md:text-5xl">
              Welcome to{' '}
              <span className="font-black text-primary-500">USPET </span>
              store.
            </h1>
            <div className="text-lg mt-3 md:mt-8 md:text-[40px] leading-10">
              We provide the{' '}
              <Icon>
                <SvgMiniPetMobile className="inline md:hidden" />
                <SvgMiniPetDesktop className="hidden md:inline" />
              </Icon>{' '}
              best products for pets.
            </div>
            <div className="flex gap-7 md:gap-8 mt-1 md:mt-4">
              <Button className="mt-5 md:mt-4 font-black font-nunito md:text-xl w-[158px] md:w-[225px] h-12 md:h-16 gap-1 md:gap-2 shadow-color-md md:shadow-color-xl">
                <Icon>
                  <SvgPetFingersMobile />
                </Icon>
                Show Store
              </Button>
              <Icon>
                <SvgCurvedArrowMobile className="md:hidden" />
                <SvgCurvedArrowDesktop className="hidden md:block" />
              </Icon>
            </div>
          </div>
          <Image
            src={'/static/landing-pet.png'}
            alt="landing-image"
            width={662}
            height={531}
            className="mt-4 md:mt-0 w-[248px] h-[199px] md:w-[662px] md:h-[531px] z-10 self-center"
          />
        </div>
        <div className="bg-nature-600 rounded-3xl w-full -mt-[30px] md:-mt-[85px] md:rounded-tr-none mx-5 pt-9 pb-6 px-4 md:px-8 md:py-8">
          <p className="font-nunito font-black text-xl md:text-4xl">
            <span className="text-primary-500">Why </span>
            rely on us?
          </p>
          <ul className="flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-8 gap-6">
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
                <p className="text-sm md:text-base font-semibold">
                  1-800-356-8933
                </p>
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
        </div>
      </div>
    </main>
  );
};

export default HomeLanding;
