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

const ProductsTable = () => {
  const router = useRouter();

  return (
    <Table>
      <TableHeader className="bg-nature-700">
        <TableRow className="font-semibold">
          <TableHead>Name</TableHead>
          <TableHead>Weight ID</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>inventory</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow
          className="cursor-pointer"
          onClick={() => {
            router.push(`/panel/admin/products/${'id'}`);
          }}
        >
          <TableCell>Royal Canin Urinary</TableCell>
          <TableCell>25KG</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>$54.00</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
