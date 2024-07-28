'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { STATUSES } from '@/routes/(dashboard)/_constants/dashboard-routes.constants';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';

import { AdminOrderResponse } from './admin-orders.query';

type OrderTableProps = {
  orders: AdminOrderResponse[];
};
const status: OrderStatus = 'pending';
const OrdersTable = (props: OrderTableProps) => {
  const router = useRouter();

  const findStatus = STATUSES.find((s) => s.name.toLowerCase() === status);

  return (
    <Table>
      <TableHeader className="bg-nature-700">
        <TableRow className="font-semibold">
          <TableHead>Username</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>State</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.orders.map((o) => (
          <TableRow
            key={o.id}
            className="cursor-pointer"
            onClick={() => {
              router.push(`/panel/admin/orders/${o.id}`);
            }}
          >
            <TableCell>{o.user_full_name}</TableCell>
            <TableCell>{o.id}</TableCell>
            <TableCell>${o.total_price}</TableCell>
            <TableCell>
              {new Date(o.created_at).toLocaleDateString('en-us', {
                dateStyle: 'medium',
              })}
            </TableCell>
            <TableCell>
              <span
                className={`font-bold px-3 py-[1px] rounded-[20px] ${findStatus?.colorClassName} ${findStatus?.bgClassName}`}
              >
                {o.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
