'use client';

import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import ShopSpecifications from '@/components/shared/shop-specifications.component';

import Footer from '../../components/shared/footer.component';
import AddCommentModal from './components/add-comment/add-comment.modal';
import ProductBreadcrumb from './components/product-breadcrumb.component';
import ProductComments from './components/product-comments.component';
import ProductWildCard from './components/product-wild-card/product-wild-card.component';
import RelatedProducts from './components/product-wild-card/related-products.component';
import useSingleProductQuery from './queries/single-product.query';

const ProductDetails = (props: { product: Product }) => {
  const { data } = useSingleProductQuery(props.product);

  if (data)
    return (
      <>
        <AddCommentModal />
        <ProductBreadcrumb />
        <ProductWildCard
          title={data.name}
          description={data.description}
          id={data.id}
          inventory={data.inventory}
          price={data.price}
          priceWithDiscount={data.price_after_promotion}
          images={data.image_urls}
          weight={data.weight}
          totalDiscount={data.total_discount}
          activePromotions={data.active_promotions}
          features={data.features}
          IngredientsAnalysis={data.IngredientsAnalysis}
          ShippingReturns={data.ShippingReturns}
        />
        <ShopSpecifications className="mt-10 md:mt-24 px-5 md:px-20" />
        <ProductComments />
        <RelatedProducts />
        <Footer />
      </>
    );
};

export default ProductDetails;
