'use client';

import React from 'react';

import SvgCatPawWhy from '@/assets/svg/cat-paw-why.svg';

import WhyRelyItemsMobile from './why-items-mobile.component';
import WhyRelyItemsDesktop from './why-rely-items-desktop.component';

const AboutUsWhy = () => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-16 md:px-20">
      <section className="md:relative px-5 w-full">
        <p className="font-nunito text-2xl md:text-[54px] font-extrabold md:leading-[60px]">
          Why rely
          <br className="hidden md:block" /> on us?
        </p>
        <p className="mt-2 md:mt-4 text-sm md:max-w-[470px] md:text-xl">
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
          elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
          scing elit. Ut
        </p>
        <img
          src="/static/about-us-why-cat.png"
          className="mt-4 w-[116px] md:w-[218px] md:mt-6"
        />
        <SvgCatPawWhy className="hidden md:block absolute top-0 right-0" />
      </section>
      <section>
        <WhyRelyItemsMobile />
        <WhyRelyItemsDesktop />
      </section>
    </main>
  );
};

export default AboutUsWhy;
