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
        containerClassName="w-[300px]"
        onSelect={(_, value) => {
          setSeleectedStatus(value);
        }}
        data={
          [
            {
              label: 'salesperson confirmation',
              value: 'salesperson_confirmation',
            },
            {
              label: 'salesperson pre factored',
              value: 'salesperson_pre_factored',
            },
            {
              label: 'inventory reservations',
              value: 'inventory_reservations',
            },
            { label: 'pre factored paid', value: 'pre_factored_paid' },
            {
              label: 'inventory confirmation',
              value: 'inventory_confirmation',
            },
            { label: 'shipped', value: 'shipped' },
            { label: 'delivered', value: 'delivered' },
            { label: 'cancelled', value: 'cancelled' },
          ] as { label: string; value: OrderStatus }[]
        }
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
