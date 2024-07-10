import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';

import NavbarProductCard from '../navbar-product-card.component';

const CartHoverContent = () => {
  const cart = useCartStore((s) => s.cart);

  return (
    <>
      <ul className="w-full max-h-[300px] overflow-y-auto no-scrollbar flex flex-col md:px-4 px-5 md:pt-4 pt-5 gap-5 md:gap-6">
        {cart.map((item) => (
          <NavbarProductCard key={item.id + item.weight} {...item} />
        ))}
      </ul>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base md:px-4 px-5">
        <p>Discount:</p>
        <p className="text-error-500">$ 17.12 (25%)</p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base md:px-4 px-5">
        <p>Total:</p>
        <p className="">$ 54.12</p>
      </div>
      <div className="mt-6 md:px-4 px-5 py-4 bg-nature-600 border-t border-nature-800">
        <div className="flex justify-between font-extrabold text-sm md:text-base">
          <p>Subtotal:</p>
          <p className="">$ 54.12</p>
        </div>
        <div className="flex gap-4 mt-5 md:mt-6">
          <Link href={'/cart/checkout'} className="w-full">
            <Button className="w-full rounded-xl">Checkout</Button>
          </Link>
          <Link href={'/cart'} className="w-full">
            <Button
              variant={'outline'}
              className="w-full rounded-xl font-normal md:font-normal"
            >
              View cart
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartHoverContent;
