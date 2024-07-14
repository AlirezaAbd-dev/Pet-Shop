'use client';

import SvgRemoveDesktop from '@/assets/svg/delete-cart-desktop.svg';
import SvgRemoveMobile from '@/assets/svg/delete-cart-mobile.svg';
import Icon from '@/components/icon';
import { useCartStore } from '@/store/cart.store';

import ProductCartCard from './cards/product-cart-card.component';

const ShoppingCart = () => {
  const cart = useCartStore((s) => s.cart);
  const clearCart = useCartStore((s) => s.clearCart);

  return (
    <section className="w-full md:col-span-8">
      <div onClick={() => clearCart()} className="flex justify-between">
        <p className="font-nunito font-black text-lg md:text-2xl">
          Shopping cart
        </p>
        <Icon className="flex items-center gap-2 text-sm md:text-lg cursor-pointer">
          <SvgRemoveMobile className="md:hidden" />
          <SvgRemoveDesktop className="hidden md:block" />
          Remove all
        </Icon>
      </div>
      <ul className="flex flex-col gap-4 md:gap-6 mt-6">
        {cart.map((item) => (
          <ProductCartCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ShoppingCart;
