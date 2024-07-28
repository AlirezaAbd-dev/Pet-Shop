import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const AdminCustomerDetailsBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/panel/admin/customers">
          Customer managment
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-text-500">Details User</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AdminCustomerDetailsBreadcrumb;
