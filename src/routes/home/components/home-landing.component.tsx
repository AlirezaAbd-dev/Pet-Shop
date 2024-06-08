import Image from 'next/image';
import React from 'react';

import SvgCurvedArrowMobile from '@/assets/svg/curved-arrow-mobile.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import SvgPetFingersMobile from '@/assets/svg/pet-fingers-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

import SvgPhoneCall from '@icons/Phone, Call.svg';
import SvgDeliveryTruck from '@icons/delivery-truck-fast.svg';
import SvgMessageChatMore from '@icons/message-chat-more-dots_2.svg';
import SvgShop from '@icons/shop.svg';
import SvgStar from '@icons/star.svg';

const HomeLanding = () => {
  return (
    <main className="px-5 pt-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <h1 className="font-nunito font-extrabold text-2xl">
            Welcome to{' '}
            <span className="font-black text-primary-500">USPET </span>
            store.
          </h1>
          <div className="text-lg mt-3">
            We provide the{' '}
            <Icon>
              <SvgMiniPetMobile className="inline" />
            </Icon>{' '}
            best products for pets.
          </div>
          <div className="flex gap-7 mt-1">
            <Button className="mt-5 font-black font-nunito w-[158px] h-12 gap-1">
              <Icon>
                <SvgPetFingersMobile />
              </Icon>
              Show Store
            </Button>
            <Icon>
              <SvgCurvedArrowMobile />
            </Icon>
          </div>
          <Image
            src={'/static/landing-pet.png'}
            alt="landing-image"
            width={248}
            height={199}
            className="mt-4 md:w-[662px] md:h-[531px] z-10 self-center"
          />
        </div>
        <div className="bg-nature-600 rounded-3xl w-full -mt-[30px] mx-5 pt-9 pb-6 px-4">
          <p className="font-nunito font-black text-xl">
            <span className="text-primary-500">Why </span>
            rely on us?
          </p>
          <ul className="flex flex-col mt-5 gap-6">
            <li className="flex gap-3">
              <Icon>
                <SvgDeliveryTruck className="w-8 h-8" />
              </Icon>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Same day delivery</p>
                <p className="text-sm font-semibold">for order beore 11:00h!</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Icon>
                <SvgShop className="w-8 h-8" />
              </Icon>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Free pick up from</p>
                <p className="text-sm font-semibold">1000S 8th Avenue, NY!</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Icon>
                <SvgStar className="w-8 h-8" />
              </Icon>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Rating 4.8/5!</p>
                <p className="text-sm font-semibold">from verified users</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Icon>
                <SvgPhoneCall className="w-8 h-8" />
              </Icon>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Call us in 09:00-16:00h</p>
                <p className="text-sm font-semibold">1-800-356-8933</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Icon>
                <SvgMessageChatMore className="w-8 h-8" />
              </Icon>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Message us,</p>
                <p className="text-sm font-semibold">respond same day!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomeLanding;
