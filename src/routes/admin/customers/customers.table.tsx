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
import { ProfileType } from '@/hooks/react-query/queries/profile.query';

type CustomersTableProps = {
  users: ProfileType[];
};

const CustomersTable = (props: CustomersTableProps) => {
  const router = useRouter();

  return (
    <Table>
      <TableHeader className="bg-nature-700">
        <TableRow className="font-semibold">
          <TableHead>ID</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.users.map((u) => (
          <TableRow
            key={u.username}
            className="cursor-pointer"
            onClick={() => {
              router.push(`/panel/admin/customers/${u.id}`);
            }}
          >
            <TableCell>{u.id}</TableCell>
            <TableCell>{u.full_name}</TableCell>
            <TableCell>{u.phone_number}</TableCell>
            <TableCell>{u.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomersTable;
