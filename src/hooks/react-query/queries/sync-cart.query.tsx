import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store/cart.store';

type CartResponse = {
  id: number;
  user: number;
  cart_items: {
    product: Product;
    id: number;
    quantity: number;
    price: number;
  }[];
  total_price: number;
  created_at: string;
  updated_at: string;
};

const useSyncCartQuery = () => {
  const axiosProtected = useAxiosProtected();

  const profile = useAuthStore((s) => s.profile);
  const cart = useCartStore((s) => s.cart);
  const setCart = useCartStore((s) => s.setCart);

  const query = useQuery<CartResponse>({
    queryKey: [queryKeys.SYNC_CART],
    queryFn: () =>
      axiosProtected
        .patch('/shop/api/v1/cart/', {
          products: cart.map((item) => ({
            product_id: item.id,
            quantity: item.count,
          })),
        })
        .then((res) => res.data),
    enabled: !!cart && cart.length > 0 && !!profile,
  });

  useEffect(() => {
    if (!query.isPending && query.isSuccess) {
      console.log(query.data);
      setCart(
        query.data.cart_items.map((item) => ({
          count: item.quantity,
          id: item.product.id,
          image: item.product.image_urls[0],
          inventory: item.product.inventory,
          price: item.product.price,
          priceWithDiscount: item.product.price_after_promotion,
          title: item.product.name,
          weight: item.product.weight,
        })),
      );
    }
  }, [query.isPending, query.isSuccess, query.data]);

  return query;
};

export default useSyncCartQuery;
