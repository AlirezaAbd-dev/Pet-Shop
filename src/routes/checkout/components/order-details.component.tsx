'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useCartStore } from '@/store/cart.store';

type OrderDetailsProps = {
  isLoading: boolean;
};

const OrderDetails = (props: OrderDetailsProps) => {
  const cart = useCartStore((s) => s.cart);

  const { discountPercent, finalPrice, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <section className="flex flex-col border border-nature-900 rounded-xl md:rounded-2xl p-3 md:p-5 md:col-span-4 md:h-min md:mt-14">
      <h3 className="font-nunito font-black text-lg md:text-2xl">Your Order</h3>

      <p className="font-nunito font-bold text-sm md:text-lg mt-4 md:mt-6">
        Products ({cart.length})
      </p>
      <ul className="flex flex-col">
        {cart?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between py-3 md:py-4 border-b border-nature-900"
          >
            <div>
              <p className="font-nunito text-sm md:text-base">{item.title}</p>
              <p className="mt-2 text-sm md:text-base text-text-300">
                {item.weight}KG / Number {item.count}
              </p>
            </div>
            <p className="text-sm md:text-base">
              ${(item.priceWithDiscount * item.count).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">Subtotal:</p>
        <p className="text-sm md:text-base">$ {totalPrice}</p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base">Discount:</p>
        <p className="text-sm md:text-base text-error-500">
          $ {totalDiscount.toFixed(2)} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <p className="font-nunito text-sm md:text-base font-extrabold">
          Total:
        </p>
        <p className="text-sm md:text-base font-extrabold">
          $ {finalPrice.toFixed(2)}
        </p>
      </div>
      <Button
        type="submit"
        variant={cart.length === 0 || props.isLoading ? 'disabled' : 'default'}
        disabled={cart.length === 0 || props.isLoading}
        isLoading={props.isLoading}
        className="mt-6 rounded-lg md:rounded-2xl md:text-base"
      >
        Proceed to checkout
      </Button>
    </section>
  );
};

export default OrderDetails;
