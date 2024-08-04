import React from 'react';

import Icon from '@/components/icon';

import SvgCalendarDates from '@icons/calendar-dates.svg';

const BlogHero = () => {
  return (
    <main className="mt-8 md:mt-12 px-5 md:px-20">
      <section className="bg-blog-hero-mobile md:bg-blog-hero bg-cover bg-no-repeat rounded-2xl h-[154px] md:h-[377px] p-4 md:p-8 flex items-center">
        <div className="flex flex-col items-start">
          <p className="font-nunito font-extrabold text-lg text-[28px]">
            Writing Title
          </p>
          <p className="mt-2 hidden md:block max-w-[45%]">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
            scing elitLorem ipsum dolor sit amet, consec tetur adipi scing elit.
            Ut scing elitLorem ipsum dolor sit amet, consec tetur adipi scing
            elit. Ut scing elit
          </p>
          <span className="flex gap-1 mt-2 md:mt-4 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px] md:font-semibold">
            <Icon>
              <SvgCalendarDates className="w-5 h-5" />
            </Icon>
            Dec 20, 2021
          </span>
        </div>
      </section>
    </main>
  );
};

export default BlogHero;
