import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const OrderDetailsBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/panel/admin/orders">
          Orders managment
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-text-500">Details order</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default OrderDetailsBreadcrumb;
