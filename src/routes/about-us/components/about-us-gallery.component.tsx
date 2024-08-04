'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import AboutUsGalleryCard from './cards/about-us-gallery-card.component';

const AboutUsGallery = () => {
  return (
    <main className="mt-16 md:mt-24">
      <p className="font-nunito font-bold text-xl md:text-[32px] text-center">
        Image Gallery
      </p>
      <p className="mt-2 md:mt-3 text-center md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Swiper
        className="hidden md:block px-20 mt-8"
        spaceBetween={24}
        slidesPerView={4}
      >
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-4.png" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        className="md:hidden mt-6 px-4"
        spaceBetween={16}
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.galley-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsGalleryCard image="/examples/gallery/gallery-image-4.png" />
        </SwiperSlide>
      </Swiper>
      <div className="block md:hidden">
        <div className="galley-pagination"></div>
      </div>
    </main>
  );
};

export default AboutUsGallery;
