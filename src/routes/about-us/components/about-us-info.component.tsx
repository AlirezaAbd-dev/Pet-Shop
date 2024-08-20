import React from 'react';

const AboutUsInfo = () => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:grid md:grid-cols-12 gap-8 px-5 md:px-20">
      <section className="md:col-span-6 md:flex md:flex-col md:justify-center">
        <p className="font-nunito font-bold text-lg md:text-4xl">
          happy pets happey humen
        </p>
        <p className="mt-2 md:mt-4 text-sm md:text-lg leading-6 md:leading-8">
          At uspetsupplies, we believe in the power of happiness—both for your
          pets and for you. That&apos;s why we commit to offering only the
          highest quality products, crafted with care and backed by years of
          expertise. Our mission is to ensure that every interaction with us
          leaves you and your furry companions with a smile.
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-2 gap-6">
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+2000 Products</p>
            <p className="text-sm mt-2 md:text-base">
              Best Quality, Variety of Categories
            </p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">+20 Countries</p>
            <p className="text-sm mt-2 md:text-base">Serving Pets Worldwide</p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              +25 Years Experience
            </p>
            <p className="text-sm mt-2 md:text-base">
              Trusted by Pet Owners Since 1999
            </p>
          </span>
          <span>
            <p className="font-bold text-xl md:txet-[32px]">
              +1000 Happy Clients
            </p>
            <p className="text-sm mt-2 md:text-base">
              Loved by Pets & Owners Alike
            </p>
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
