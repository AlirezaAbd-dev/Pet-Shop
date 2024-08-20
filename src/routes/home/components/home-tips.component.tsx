'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Blog } from '..';
import BlogCard from './cards/tips-card.component';

type Props = {
  blog: Blog[];
};

const HomeBlog = (props: Props) => {
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
          el: '.blog-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        {props.blog.slice(0, 3).map((b) => (
          <SwiperSlide key={b.title}>
            <BlogCard {...b} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:hidden">
        <div className="blog-pagination"></div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-8 px-20">
        {props.blog.slice(0, 3).map((b) => (
          <BlogCard key={b.title} {...b} />
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;
