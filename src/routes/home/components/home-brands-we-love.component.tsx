'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BRANDS_LIST } from '../constants/home.constants';

const Slide = (props: { url: string }) => {
  return (
    <div className="flex items-center h-[50px] md:h-[83] max-h-[50px] md:max-h-[83px]">
      <Image
        src={`/static/brands/${props.url}`}
        width={150}
        height={83}
        alt={props.url}
        className="h-full w-auto"
      />
    </div>
  );
};

const HomeBrandsWeLove = () => {
  return (
    <section className="mt-16 md:mt-24">
      <p className="font-black font-nunito text-xl md:text-4xl text-center">
        Brands We Love
      </p>
      <Swiper
        modules={[Autoplay]}
        className="mt-5 md:hidden"
        spaceBetween={44}
        autoplay={{ delay: 2000 }}
        loop
        slidesPerView={3}
      >
        {BRANDS_LIST.map((item) => (
          <SwiperSlide key={item.url}>
            <Slide url={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex gap-20 justify-between px-20 mt-8">
        {BRANDS_LIST.map((item) => (
          <Slide key={item.url} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default HomeBrandsWeLove;
