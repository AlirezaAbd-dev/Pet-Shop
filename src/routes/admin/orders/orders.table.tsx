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

type OrderTableProps = {};
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
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/orders/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>Google</TableCell>
          <TableCell>$42,000</TableCell>
          <TableCell>12 Jan 2023</TableCell>
          <TableCell>
            <span
              className={`font-bold px-3 py-[1px] rounded-[20px] ${findStatus?.colorClassName} ${findStatus?.bgClassName}`}
            >
              {status}
            </span>
          </TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/orders/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>Google</TableCell>
          <TableCell>$42,000</TableCell>
          <TableCell>12 Jan 2023</TableCell>
          <TableCell>
            <span
              className={`font-bold px-3 py-[1px] rounded-[20px] ${findStatus?.colorClassName} ${findStatus?.bgClassName}`}
            >
              {status}
            </span>
          </TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/orders/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>Google</TableCell>
          <TableCell>$42,000</TableCell>
          <TableCell>12 Jan 2023</TableCell>
          <TableCell>
            <span
              className={`font-bold px-3 py-[1px] rounded-[20px] ${findStatus?.colorClassName} ${findStatus?.bgClassName}`}
            >
              {status}
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
