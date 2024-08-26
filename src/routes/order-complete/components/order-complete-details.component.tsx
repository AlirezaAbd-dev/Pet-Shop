'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import SvgCopyPaste from '@/assets/svg/copy-paste-select-add-plus-red.svg';
import SvgOrderCompletePetDesktop from '@/assets/svg/order-complete-pet-desktop.svg';
import SvgOrderCompletePetMobile from '@/assets/svg/order-complete-pet-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

const OrderCompleteDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isCopied, setIsCopied] = useState(false);

  const orderId = searchParams.get('order-id');

  return (
    <section className="flex flex-col items-center mt-10 md:mt-16 px-5">
      <Icon>
        <SvgOrderCompletePetMobile className="md:hidden" />
        <SvgOrderCompletePetDesktop className="hidden md:block" />
      </Icon>
      <h1 className="mt-3 md:mt-4 font-bold md:text-2xl text-center">
        Your order is completed
      </h1>
      <h1 className="mt-2 md:mt-4 text-sm md:text-lg text-center px-3">
        Our experts will contact you after checking the order.
      </h1>

      <div className="flex flex-col md:flex-row gap-4 w-full mt-6 md:mt-8 md:w-[593px]">
        <Button
          className="w-full"
          onClick={() => {
            router.push(`/dashboard/orders/${orderId}`);
          }}
        >
          Order status
        </Button>
        <Button
          variant={'text'}
          onClick={() => {
            if (orderId) {
              navigator.clipboard.writeText(orderId);
              setIsCopied(true);
            }
          }}
          className="md:w-full flex bg-primary-50/5 text-primary-500 gap-2 hover:bg-opacity-10 hover:text-primary-500"
        >
          {isCopied ? (
            <>
              <SvgCopyPaste />
              Copied: #{orderId}
            </>
          ) : (
            <>
              <SvgCopyPaste />
              Order ID: #{orderId}
            </>
          )}
        </Button>
      </div>
    </section>
  );
};

export default OrderCompleteDetails;
