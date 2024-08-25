import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { calculatePrice } from '@/lib/utils/calculatePrice';
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store/cart.store';

import NavbarProductCard from '../navbar-product-card.component';

const CartHoverContent = () => {
  const router = useRouter();

  const profile = useAuthStore((s) => s.profile);
  const isLoading = useAuthStore((s) => s.isLoading);
  const cart = useCartStore((s) => s.cart);

  const { finalPrice, discountPercent, totalDiscount, totalPrice } =
    calculatePrice(cart);

  return (
    <>
      <ul className="w-full max-h-[300px] overflow-y-auto no-scrollbar flex flex-col md:px-4 px-5 md:pt-4 pt-5 gap-5 md:gap-6">
        {cart.map((item) => (
          <NavbarProductCard key={item.id} {...item} />
        ))}
      </ul>
      <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base md:px-4 px-5">
        <p>Discount:</p>
        <p className="text-error-500">
          $ {totalDiscount.toFixed(2)} ({discountPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base md:px-4 px-5">
        <p>Total:</p>
        <p className="">$ {finalPrice.toFixed(2)}</p>
      </div>
      <div className="mt-6 md:px-4 px-5 py-4 bg-nature-600 border-t border-nature-800">
        <div className="flex justify-between font-extrabold text-sm md:text-base">
          <p>Subtotal:</p>
          <p className="">$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex gap-4 mt-5 md:mt-6">
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            variant={isLoading ? 'disabled' : 'default'}
            onClick={() => {
              if (profile) router.push('/cart/checkout');
              else router.push('/login');
            }}
            className="w-full rounded-xl"
          >
            Checkout
          </Button>
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
