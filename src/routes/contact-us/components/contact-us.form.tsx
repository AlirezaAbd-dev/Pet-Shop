import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUsForm = () => {
  return (
    <main className="flex flex-col md:grid md:grid-cols-12 mt-8 md:mt-20 px-5 md:px-20 gap-8">
      <section className="md:col-span-5">
        <h1 className="text-xl md:text-[32px] font-bold font-nunito">
          Contact us
        </h1>
        <p className="text-sm md:text-base md:mt-2 mt-1 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <form className="mt-6 md:mt-8">
          <div>
            <p className="text-sm md:text-base">Full name*</p>
            <Input className="mt-3" />
          </div>
          <div className="mt-5 md:mt-6">
            <p className="text-sm md:text-base">Email*</p>
            <Input className="mt-3" />
          </div>
          <div className="mt-5 md:mt-6">
            <p className="text-sm md:text-base">Message*</p>
            <Textarea className="mt-3 h-[99px]" />
          </div>
          <Button className="w-full md:w-[169px] md:text-base mt-5 md:mt-6 rounded-lg font-bold">
            Submit
          </Button>
        </form>
      </section>
      <div className="hidden md:block col-span-2"></div>
      <div className="md:col-span-5 md:flex md:items-center md:justify-end">
        <img
          src="/static/contact-us-map.png"
          alt="location"
          className="w-full"
        />
      </div>
    </main>
  );
};

export default ContactUsForm;
