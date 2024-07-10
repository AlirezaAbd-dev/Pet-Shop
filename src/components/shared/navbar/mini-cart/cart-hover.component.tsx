'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

import CartHoverContent from './cart-hover-content.component';
import CartHoverEmptyContent from './cart-hover-empty-content.component';
import CartHoverTrigger from './cart-hover-trigger.component';

const CartButton = () => {
  const pathname = usePathname();

  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const cart = useCartStore((s) => s.cart);

  const isCartEmpty = cart.length === 0;

  useEffect(() => {
    setIsHoverOpen(false);
    setIsPopoverOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 z-40 w-full h-full hidden bg-gradient-to-b from-[rgba(8,54,123,0)] to-[rgba(8,54,123,.25)]',
          isHoverOpen ? 'md:block mt-20' : '',
          isPopoverOpen ? 'md:hidden block mt-10' : '',
        )}
      ></div>
      <section
        className={cn(
          'hidden md:block',
          pathname.startsWith('/cart') ? 'md:hidden' : '',
        )}
      >
        <HoverCard
          openDelay={100}
          closeDelay={100}
          open={isHoverOpen}
          onOpenChange={setIsHoverOpen}
        >
          {/* for desktop */}
          <HoverCardTrigger>
            <CartHoverTrigger />
          </HoverCardTrigger>

          {/* for desktop */}
          <HoverCardContent className="flex flex-col bg-white md:mr-20 md:mt-7 md:rounded-2xl border-none w-full md:w-[483px] p-0 overflow-hidden">
            {!isCartEmpty && <CartHoverContent />}
            {isCartEmpty && <CartHoverEmptyContent />}
          </HoverCardContent>
        </HoverCard>
      </section>
      <section
        className={cn(
          'md:hidden',
          pathname.startsWith('/cart') ? 'hidden' : '',
        )}
      >
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          {/* for mobile */}
          <PopoverTrigger>
            <CartHoverTrigger />
          </PopoverTrigger>
          {/* for mobile */}
          <PopoverContent className="md:hidden flex flex-col bg-white border-none w-screen p-0 overflow-hidden shadow-2xl mt-3">
            {!isCartEmpty && <CartHoverContent />}
            {isCartEmpty && <CartHoverEmptyContent />}
          </PopoverContent>
        </Popover>
      </section>
    </>
  );
};

export default CartButton;
