import React from 'react';

import Footer from '@/components/shared/footer.component';

import ProgressBar from '../cart/components/progressbar.component';
import CheckoutForm from './components/checkout.form';
import OrderDetails from './components/order-details.component';

const Checkout = () => {
  return (
    <>
      <ProgressBar active={2} />
      <main className="flex flex-col gap-6  md:flex-row px-5 md:px-20 mt-10 md:mt-16">
        <CheckoutForm />
        <OrderDetails />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
