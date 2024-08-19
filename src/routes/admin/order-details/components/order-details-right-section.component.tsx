import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Slider } from '@/components/ui/slider';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';

import useChangeOrderStatusMutation from '../queries/change-order-status.mutation';

type Props = {
  status: OrderStatus;
  value: number;
  color: string;
};

const OrderDetailsRightSection = (props: Props) => {
  const [selectedStatus, setSeleectedStatus] = useState<string>();

  const { mutate, isPending } = useChangeOrderStatusMutation();

  function onEditStatus() {
    if (selectedStatus) {
      mutate(selectedStatus);
    }
  }

  return (
    <div className="w-[251px]">
      <p className="font-bold">{props.status}</p>
      <Slider
        value={[props?.value]}
        className="mt-4"
        thumbClassname={`${props.color} border-inherit`}
        rangeClassname={`${props.color}`}
      />
      <p className="mt-8">Order state</p>
      <Combobox
        name="status"
        buttonClassName="mt-3"
        onSelect={(_, value) => {
          setSeleectedStatus(value);
        }}
        data={[
          { label: 'shipped', value: 'shipped' },
          { label: 'delivered', value: 'delivered' },
          { label: 'cancelled', value: 'cancelled' },
        ]}
      />
      <Button
        isLoading={isPending}
        disabled={isPending || !selectedStatus}
        variant={isPending || !selectedStatus ? 'disabled' : 'default'}
        onClick={onEditStatus}
        className="mt-4 md:text-sm w-full"
      >
        Confirmation
      </Button>
    </div>
  );
};

export default OrderDetailsRightSection;
