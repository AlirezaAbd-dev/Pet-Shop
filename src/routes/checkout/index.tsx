'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Footer from '@/components/shared/footer.component';
import LoadingSpinner from '@/components/ui/loading-spinner';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';

import ProgressBar from '../cart/components/progressbar.component';
import CheckoutMainForm from './components/checkout-main.form';
import useAdressesQuery from './queries/addresses.query';

const Checkout = () => {
  const router = useRouter();

  const { isPending, error } = useProfileQuery();
  const { data, isPending: isAddressesPending } = useAdressesQuery();

  useEffect(() => {
    if (!isPending && error && error.status === 401) {
      router.replace('/login');
    }
  }, [isPending, error]);

  if (isPending || isAddressesPending) {
    return <LoadingSpinner className="mt-10 md:mt-16" />;
  }

  return (
    <>
      <ProgressBar active={2} />
      <CheckoutMainForm address={data || []} />
      <Footer />
    </>
  );
};

export default Checkout;
