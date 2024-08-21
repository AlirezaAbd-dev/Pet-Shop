import { Product } from '@/app/(core)/product/[productId]/page';

import ImagesShowcase from './images-showcase.component';
import OfferCard from './offer-card.component';
import ProductDetailsSection from './product-details-section.component';

export type ProductWildCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  priceWithDiscount: number;
  inventory: number;
  images: string[];
  weight: number;
  totalDiscount: number;
  features?: string;
  IngredientsAnalysis?: string;
  ShippingReturns?: string;
  activePromotions:
    | null
    | {
        discount: number;
        valid_from: string;
        valid_to: string;
        description: string;
      }[];
};

const ProductWildCard = (props: ProductWildCardProps) => {
  return (
    <>
      <main className="mt-6 md:mt-8 mx-5 md:mx-20 flex flex-col md:grid md:grid-cols-12 md:gap-14">
        {props.activePromotions && (
          <div className="md:hidden">
            <OfferCard activePromotions={props.activePromotions} />
          </div>
        )}
        <ImagesShowcase
          images={props.images}
          discount={props.totalDiscount}
          hasActivePromotion={!!props.activePromotions}
        />
        <ProductDetailsSection {...props} />
      </main>
    </>
  );
};

export default ProductWildCard;
