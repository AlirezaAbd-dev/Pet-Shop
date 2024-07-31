import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const AddProductBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/panel/admin/products">
          List of product
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-text-500">Add product</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AddProductBreadcrumb;
