'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@/components/icon';

import SvgCalendarDates from '@icons/calendar-dates.svg';

const HomeTips = () => {
  return (
    <section className="mt-16">
      <p className="font-black font-nunito text-xl text-center">
        tips & recommendations
      </p>
      <Swiper className="px-5 mt-6" spaceBetween={20}>
        <SwiperSlide className="flex flex-col items-start border border-nature-800 p-4">
          <Image
            src="/static/tip-cat.png"
            alt="tip-cat"
            width={288}
            height={180}
            className="w-full"
          />
          <span className="flex gap-1 mt-3 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px]">
            <Icon>
              <SvgCalendarDates className="w-5 h-5" />
            </Icon>
            Dec 20, 2021
          </span>
          <p className="font-nunito font-bold mt-4">
            Family reunited with stolen cats after online appeal
          </p>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start border border-nature-800 p-4">
          <Image
            src="/static/tip-cat.png"
            alt="tip-cat"
            width={288}
            height={180}
            className="w-full"
          />
          <span className="flex gap-1 mt-3 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px]">
            <Icon>
              <SvgCalendarDates className="w-5 h-5" />
            </Icon>
            Dec 20, 2021
          </span>
          <p className="font-nunito font-bold mt-4">
            Family reunited with stolen cats after online appeal
          </p>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start border border-nature-800 p-4">
          <Image
            src="/static/tip-cat.png"
            alt="tip-cat"
            width={288}
            height={180}
            className="w-full"
          />
          <span className="flex gap-1 mt-3 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px]">
            <Icon>
              <SvgCalendarDates className="w-5 h-5" />
            </Icon>
            Dec 20, 2021
          </span>
          <p className="font-nunito font-bold mt-4">
            Family reunited with stolen cats after online appeal
          </p>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeTips;
