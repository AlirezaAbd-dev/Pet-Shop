'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Category } from '@/app/(core)/shop/page';
import { cn } from '@/lib/utils';

import CategoryCard from './cards/category-card.component';

type HomeCategoriesProps = {
  categories: Category[];
};

const HomeCategories = (props: HomeCategoriesProps) => {
  return (
    <main className="mt-16 px-5 md:px-20 md:mt-24">
      <p className="font-nunito font-black text-xl md:text-4xl text-center">
        Category
      </p>
      <Swiper
        className="mt-5 md:mt-8 hidden md:flex"
        spaceBetween={32}
        slidesPerView={5}
      >
        {props.categories.map((c, index) => (
          <SwiperSlide key={c.id}>
            <CategoryCard
              category={c}
              index={index}
              totalLength={props.categories.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="mt-5 grid grid-cols-2 md:hidden justify-items-center gap-y-8">
        {props.categories.map((c, index) => (
          <CategoryCard
            key={c.id}
            category={c}
            index={index}
            totalLength={props.categories.length}
          />
        ))}
      </section>
    </main>
  );
};

export default HomeCategories;
