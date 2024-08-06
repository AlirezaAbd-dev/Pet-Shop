import { useRouter } from 'next/navigation';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { AdminProduct } from './admin-products.query';

type Props = {
  products: AdminProduct[];
};

const ProductsTable = (props: Props) => {
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
        {props.products.map((item) => (
          <TableRow
            key={item.id}
            className="cursor-pointer"
            onClick={() => {
              router.push(`/panel/admin/products/${item.id}`);
            }}
          >
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.weight}KG</TableCell>
            <TableCell>{item.discount || 0}%</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>{item.inventory}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
