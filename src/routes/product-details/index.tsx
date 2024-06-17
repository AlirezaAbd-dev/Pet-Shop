import React from 'react';

import ShopSpecifications from '@/components/shared/shop-specifications.component';

import Footer from '../../components/shared/footer.component';
import ProductBreadcrumb from './components/product-breadcrumb.component';
import ProductWildCard from './components/product-wild-card/product-wild-card.component';
import RelatedProducts from './components/product-wild-card/related-products.component';

const ProductDetails = () => {
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
