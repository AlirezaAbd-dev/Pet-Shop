import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const EditProductBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/panel/admin/products">
          List of product
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-text-500">Edit product</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default EditProductBreadcrumb;
