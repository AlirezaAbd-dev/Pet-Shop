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

type CustomersTableProps = {};

const CustomersTable = (props: CustomersTableProps) => {
  const router = useRouter();

  return (
    <Table>
      <TableHeader className="bg-nature-700">
        <TableRow className="font-semibold">
          <TableHead>Username</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Country / Region</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/customers/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>09304673884</TableCell>
          <TableCell>milad138001@gmail.com</TableCell>
          <TableCell>Iran</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/customers/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>09304673884</TableCell>
          <TableCell>milad138001@gmail.com</TableCell>
          <TableCell>Iran</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push('/panel/admin/customers/id');
          }}
        >
          <TableCell>Annette Black</TableCell>
          <TableCell>09304673884</TableCell>
          <TableCell>milad138001@gmail.com</TableCell>
          <TableCell>Iran</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CustomersTable;
