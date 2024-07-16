import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store/cart.store';

const useSyncCartQuery = () => {
  const axiosProtected = useAxiosProtected();

  const profile = useAuthStore((s) => s.profile);
  const cart = useCartStore((s) => s.cart);

  const query = useQuery({
    queryKey: [queryKeys.SYNC_CART],
    queryFn: () =>
      axiosProtected.patch('/shop/api/v1/cart/', {
        products: cart.map((item) => ({
          product_id: item.id,
          quantity: item.count,
        })),
      }),
    enabled: !!cart && cart.length > 0 && !!profile,
  });
  console.log(query.data);

  return query;
};

export default useSyncCartQuery;
