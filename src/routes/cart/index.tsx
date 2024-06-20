import Footer from '@/components/shared/footer.component';

import CartTotals from './components/cart-totals.component';
import ProgressBar from './components/progressbar.component';
import ShoppingCart from './components/shopping-cart.component';

const Cart = () => {
  return (
    <>
      <ProgressBar active={1} />
      <main className="flex flex-col gap-4 md:gap-6 md:flex-row px-5 md:px-20 mt-10 md:mt-16">
        <ShoppingCart />
        <CartTotals />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
