import React from 'react';

const AboutUsHero = () => {
  return (
    <main className="px-5 md:px-20 mt-8 md:mt-12">
      <div className="h-[212px] md:h-[652px] bg-about-us-hero-mobile md:bg-about-us-hero-desktop bg-cover flex flex-col items-center rounded-2xl">
        <p className="font-extrabold text-xl md:text-[32px] font-nunito mt-4 md:mt-8">
          About us
        </p>
        <p className="hidden md:block mt-2 text-lg leading-8 max-w-[893px] text-center">
          At US Pet Supplies, we&apos;re dedicated to providing quality products
          and supplies for your furry, feathered, and scaly friends. From
          nutrition to toys, we have everything you need to keep your pets happy
          and healthy
        </p>
      </div>
    </main>
  );
};

export default AboutUsHero;
