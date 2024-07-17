'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

const OrderDetails = () => {
  return (
    <section className="flex flex-col border border-nature-900 rounded-xl md:rounded-2xl p-3 md:p-5 md:col-span-4 md:h-min md:mt-14">
      <h3 className="font-nunito font-black text-lg md:text-2xl">Your Order</h3>

      <p className="font-nunito font-bold text-sm md:text-lg mt-4 md:mt-6">
        Products (2)
      </p>
      <ul className="flex flex-col">
        <li className="flex justify-between py-3 md:py-4 border-b border-nature-900">
          <div>
            <p className="font-nunito text-sm md:text-base">
              Royal Canin Urinary
            </p>
            <p className="mt-2 text-sm md:text-base text-text-300">
              50KG / Number 5
            </p>
          </div>
          <p className="text-sm md:text-base">$54.12</p>
        </li>
        <li className="flex justify-between py-3 md:py-4 border-b border-nature-900">
          <div>
            <p className="font-nunito text-sm md:text-base">
              Royal Canin Urinary
            </p>
            <p className="mt-2 text-sm md:text-base text-text-300">
              50KG / Number 5
            </p>
          </div>
          <p className="text-sm md:text-base">$54.12</p>
        </li>
      </ul>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">Subtotal:</p>
        <p className="text-sm md:text-base">$ 71.12</p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">Discount:</p>
        <p className="text-sm md:text-base text-error-500">$ 17.12 (25%)</p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base font-extrabold">
          Total:
        </p>
        <p className="text-sm md:text-base font-extrabold">$ 54.12</p>
      </div>
      <Button
        type="submit"
        className="mt-6 rounded-lg md:rounded-2xl md:text-base"
      >
        Proceed to checkout
      </Button>
    </section>
  );
};

export default OrderDetails;
