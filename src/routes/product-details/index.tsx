'use client';

import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import ShopSpecifications from '@/components/shared/shop-specifications.component';

import Footer from '../../components/shared/footer.component';
import ProductBreadcrumb from './components/product-breadcrumb.component';
import ProductWildCard from './components/product-wild-card/product-wild-card.component';
import RelatedProducts from './components/product-wild-card/related-products.component';
import useSingleProductQuery from './queries/single-product.query';

const ProductDetails = (props: { product: Product }) => {
  const { data } = useSingleProductQuery(props.product);
  console.log(data);
  return (
    <>
      <ProductBreadcrumb />
      <ProductWildCard />

      <ShopSpecifications className="mt-10 md:mt-24 px-5 md:px-20" />
      <RelatedProducts />
      <Footer />
    </>
  );
};

export default ProductDetails;
