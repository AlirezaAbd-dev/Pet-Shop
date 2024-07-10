import { CartProduct } from '@/store/cart.store';

export function calculatePercent(total: number, available: number) {
  return 100 - (available / total) * 100;
}

export function calculatePrice(cart: CartProduct[]) {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  const finalPrice = cart.reduce((acc, item) => {
    return acc + item.priceWithDiscount * item.count;
  }, 0);

  const totalDiscount = totalPrice - finalPrice;
  const discountPercent = calculatePercent(totalPrice, finalPrice);

  return { totalPrice, finalPrice, totalDiscount, discountPercent };
}
