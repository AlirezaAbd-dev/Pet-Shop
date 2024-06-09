'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import TipsCard from './cards/tips-card.component';

const HomeTips = () => {
  return (
    <section className="mt-16 md:mt-24">
      <p className="font-black font-nunito text-xl md:text-4xl text-center">
        tips & recommendations
      </p>
      <Swiper className="px-5 mt-6 md:hidden" spaceBetween={20}>
        <SwiperSlide>
          <TipsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TipsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TipsCard />
        </SwiperSlide>
      </Swiper>

      <div className="hiddedn md:flex gap-6 mt-8 px-20">
        <TipsCard />
        <TipsCard />
        <TipsCard />
      </div>
    </section>
  );
};

export default HomeTips;
