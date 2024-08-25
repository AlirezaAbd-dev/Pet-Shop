'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useCartStore } from '@/store/cart.store';

const CartTotals = () => {
  const { data, isPending } = useProfileQuery();

  const router = useRouter();
  const cart = useCartStore((s) => s.cart);

  const { discountPercent, finalPrice, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <section className="flex flex-col md:w-full border border-nature-900 md:col-span-4 md:mt-14 p-3 md:p-5 rounded-xl md:rounded-2xl md:h-min">
      <h3 className="font-nunito font-black text-lg md:text-2xl">
        Cart Totals
      </h3>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base">
        <p>Subtotal:</p>
        <p>$ {totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base">
        <p>Discount:</p>
        <p className="text-error-500">
          $ {totalDiscount.toFixed(2)} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="mt-4 border-t border-nature-900 w-full"></div>
      <div className="flex justify-between mt-4 text-sm md:text-base font-extrabold">
        <p>Total:</p>
        <p>$ {finalPrice.toFixed(2)}</p>
      </div>
      <Button
        onClick={() => {
          if (data?.data) router.push('/cart/checkout');
          else router.push('/login');
        }}
        isLoading={isPending}
        disabled={isPending || cart.length === 0}
        variant={isPending || cart.length === 0 ? 'disabled' : 'default'}
        className="mt-4 md:mt-6 font-bold text-sm rounded-lg md:rounded-2xl md:h-[56px]"
      >
        Proceed to checkout
      </Button>
    </section>
  );
};

export default CartTotals;
