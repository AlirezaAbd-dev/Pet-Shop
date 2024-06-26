'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import TipsCard from './cards/tips-card.component';

const HomeTips = () => {
  return (
    <section className="mt-16 md:mt-24">
      <p className="font-black font-nunito text-xl md:text-4xl text-center">
        tips & recommendations
      </p>
      <Swiper
        className="px-5 mt-6 md:hidden"
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.tips-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        <SwiperSlide>
          <TipsCard image="tip-cat3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <TipsCard image="tip-cat2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <TipsCard image="tip-cat.png" />
        </SwiperSlide>
      </Swiper>

      <div className="md:hidden">
        <div className="tips-pagination"></div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-8 px-20">
        <TipsCard image="tip-cat3.png" />
        <TipsCard image="tip-cat2.png" />
        <TipsCard image="tip-cat.png" />
      </div>
    </section>
  );
};

export default HomeTips;
