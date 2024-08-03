import React from 'react';

const AboutUsHero = () => {
  return (
    <main className="px-5 md:px-20 mt-8 md:mt-12">
      <div className="h-[212px] md:h-[652px] bg-about-us-hero-mobile md:bg-about-us-hero-desktop bg-cover flex flex-col items-center rounded-2xl">
        <p className="font-extrabold text-xl md:text-[32px] font-nunito mt-4 md:mt-8">
          About us
        </p>
        <p className="hidden md:block mt-2 text-lg leading-8 max-w-[893px] text-center">
          Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec
          tetur adipi scing elit. Ut scing elittetur adipi scing elit. Ut scing
          elit
        </p>
      </div>
    </main>
  );
};

export default AboutUsHero;
