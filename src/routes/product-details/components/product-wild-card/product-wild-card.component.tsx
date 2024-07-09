import ImagesShowcase from './images-showcase.component';
import ProductDetailsSection from './product-details-section.component';

export type ProductWildCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  priceWithDiscount: number;
  inventory: number;
};

const ProductWildCard = (props: ProductWildCardProps) => {
  return (
    <main className="mt-4 md:mt-16 mx-5 md:mx-20 flex flex-col md:grid md:grid-cols-12 md:gap-14">
      <ImagesShowcase />
      <ProductDetailsSection {...props} />
    </main>
  );
};

export default ProductWildCard;
