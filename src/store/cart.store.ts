import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Prettify } from '@/lib/types/utils';

type CartProduct = Prettify<{
  id: number;
  title: string;
  image: string;
  price: number;
  priceWithDiscount: number;
  weight: string;
  count: number;
}>;

type UseCartStoreType = {
  cart: CartProduct[];
  onChangeCart: (cartProduct: CartProduct) => void;
};

export const useCartStore = create<UseCartStoreType>()(
  persist(
    (set, get) => ({
      cart: [],
      onChangeCart(cartProduct) {
        const currentCart = [...get().cart];

        const findProductIndex = currentCart.findIndex(
          (c) => c.id === cartProduct.id && c.weight === cartProduct.weight,
        );

        if (findProductIndex === -1) {
          currentCart.push(cartProduct);
          return set({ cart: currentCart });
        }

        if (cartProduct.count === 0) {
          currentCart.splice(findProductIndex, 1);
          return set({ cart: currentCart });
        }

        currentCart[findProductIndex] = cartProduct;
        return set({ cart: currentCart });
      },
    }),
    { name: 'cart' },
  ),
);
