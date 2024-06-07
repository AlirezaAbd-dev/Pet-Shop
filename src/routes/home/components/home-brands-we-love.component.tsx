'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeBrandsWeLove = () => {
  return (
    <section className="mt-16">
      <p className="font-black font-nunito text-xl text-center">
        Brands We Love
      </p>
      <Swiper
        modules={[Autoplay]}
        className="mt-5"
        spaceBetween={44}
        autoplay={{ delay: 2000 }}
        loop
        slidesPerView={3}
      >
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/happy-dog.png'}
            width={50}
            height={50}
            alt="happy-dog"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/josera.png'}
            width={50}
            height={50}
            alt="josera"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/the-honnest-kitchen.png'}
            width={50}
            height={50}
            alt="the-honnest-kitchen"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/purina-pro-plan.png'}
            width={50}
            height={50}
            alt="purina-pro-plan"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/top-fin.png'}
            width={50}
            height={50}
            alt="top-fin"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[50px] max-h-[50px]">
          <Image
            src={'/static/brands/royal-canin.png'}
            width={50}
            height={50}
            alt="royal-canin"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeBrandsWeLove;
