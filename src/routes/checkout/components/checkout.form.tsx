import React from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CheckoutForm = () => {
  return (
    <main className="w-full">
      <h1 className="font-nunito font-black text-lg md:text-2xl">
        Billing Details
      </h1>
      <section className="flex flex-col gap-4 md:gap-8 mt-6 md:mt-7">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base text-text-200">
              Full name
            </label>
            <Input disabled value={'alireza abedi'} />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base text-text-200">Email</label>
            <Input disabled value={'alireza.abedi9310@gmail.com'} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">Country / Region *</label>
            <Input />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">County *</label>
            <Input />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">Street address *</label>
            <Input />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">Town / City *</label>
            <Input />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">Postcode *</label>
            <Input />
          </div>
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">Phone *</label>
            <Input />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:w-full">
            <label className="text-sm md:text-base">
              Order Notes (optional)
            </label>
            <Textarea className="h-[126px]" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutForm;
