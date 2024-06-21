import React from 'react';

import Footer from '@/components/shared/footer.component';

import ProgressBar from '../cart/components/progressbar.component';
import OrderCompleteDetails from './components/order-complete-details.component';

const OrderComplete = () => {
  return (
    <>
      <ProgressBar active={3} />
      <OrderCompleteDetails />
      <Footer />
    </>
  );
};

export default OrderComplete;
