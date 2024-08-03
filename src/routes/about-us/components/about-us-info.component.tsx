import React from 'react';

const AboutUsInfo = () => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:grid md:grid-cols-12 gap-8 px-5 md:px-20">
      <section className="md:col-span-6 md:flex md:flex-col md:justify-center">
        <p className="font-nunito font-bold text-lg md:text-4xl">
          Highlight company impact by the numbers
        </p>
        <p className="mt-2 md:mt-4 text-sm md:text-lg leading-6 md:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-2 gap-6">
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+50</p>
            <p className="text-sm mt-2 md:text-base">Number of product</p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+310</p>
            <p className="text-sm mt-2 md:text-base">Number of user</p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+540</p>
            <p className="text-sm mt-2 md:text-base">Number of orders</p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+12</p>
            <p className="text-sm mt-2 md:text-base">Number of category</p>
          </span>
        </div>
      </section>
      <div className="hidden md:block col-span-1"></div>
      <section className="md:col-span-5 md:flex md:justify-end items-center">
        <img src="/static/about-us-info.png" alt="about-us info" />
      </section>
    </main>
  );
};

export default AboutUsInfo;
