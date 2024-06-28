'use client';

import React from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BRANDS_LIST } from '../constants/home.constants';

const Slide = (props: { url: string }) => {
  return (
    <div className="flex items-center justify-center h-[50px] md:h-[83] max-h-[50px] md:max-h-[83px]">
      <img
        src={`/static/brands/${props.url}`}
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
        modules={[Autoplay, FreeMode]}
        className="mt-5 md:hidden"
        autoplay={{ delay: 2000 }}
        loop
        freeMode
        spaceBetween={44}
        slidesPerView={2.2}
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
