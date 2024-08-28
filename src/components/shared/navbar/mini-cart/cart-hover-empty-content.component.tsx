import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

const CartHoverEmptyContent = () => {
  const router = useRouter();

  return (
    <main className="relative w-full mt-5 md:mt-6 h-[234px] md:h-[252px]">
      <div className="flex flex-col items-center text-black">
        <p className="font-bold md:text-xl">Your shopping cart is empty</p>
        <p className="mt-1 md:mt-3 md:font-bold md:text-lg text-sm">
          You can visit our attractive store.
        </p>
        <Button
          onClick={() => router.push('/shop')}
          className="mt-3 md:mt-4 w-[170px] h-11 md:h-12 rounded-xl"
        >
          Shop
        </Button>
      </div>
      <img
        src="/static/gray-cat-mini-cart.png"
        alt="gray-cat"
        className="absolute bottom-0 right-0 w-[96px] md:w-auto"
      />
      <img
        src="/static/yellow-dog-mini-cart.png"
        alt="gray-cat"
        className="absolute bottom-0 left-0 w-[100px] md:w-auto"
      />
    </main>
  );
};

export default CartHoverEmptyContent;
