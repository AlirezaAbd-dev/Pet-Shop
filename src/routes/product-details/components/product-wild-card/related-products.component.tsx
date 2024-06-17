'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import StandardProductCard from '@/routes/home/components/cards/standard-product-card.component';

const RelatedProducts = () => {
  return (
    <section className="mt-16 md:mt-24">
      <h4 className="text-xl md:text-4xl font-nunito font-black text-center">
        Related products
      </h4>

      <section className="hidden md:flex gap-6 px-20 mt-8">
        <StandardProductCard />
        <StandardProductCard />
        <StandardProductCard />
        <StandardProductCard />
      </section>

      <Swiper
        className="md:hidden mt-6 px-4"
        spaceBetween={16}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.categories-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        <SwiperSlide>
          <StandardProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <StandardProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <StandardProductCard />
        </SwiperSlide>
      </Swiper>
      <div className="block md:hidden">
        <div className="categories-pagination"></div>
      </div>
    </section>
  );
};

export default RelatedProducts;
