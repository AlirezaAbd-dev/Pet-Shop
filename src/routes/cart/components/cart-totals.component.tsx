'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

const CartTotals = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col md:w-full border border-nature-900 md:col-span-4 md:mt-14 p-3 md:p-5 rounded-xl md:rounded-2xl">
      <h3 className="font-nunito font-black text-lg md:text-2xl">
        Cart Totals
      </h3>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base">
        <p>Subtotal:</p>
        <p>$ 54.12</p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base">
        <p>Discount:</p>
        <p className="text-error-500">$ 17.12 (25%)</p>
      </div>
      <div className="mt-4 border-t border-nature-900 w-full"></div>
      <div className="flex justify-between mt-4 text-sm md:text-base font-extrabold">
        <p>Total:</p>
        <p>$ 54.12</p>
      </div>
      <Button
        onClick={() => {
          router.push('/cart/checkout');
        }}
        className="mt-4 md:mt-6 font-bold text-sm rounded-lg md:rounded-2xl md:h-[56px]"
      >
        Proceed to checkout
      </Button>
    </section>
  );
};

export default CartTotals;
