import { axiosInstance } from '@/lib/constants/axios';
import ProductDetails from '@/routes/product-details';

export type Product = {
  id: number;
  name: string;
  description: string;
  brand: number;
  price: number;
  inventory: number;
  features: string;
  pets: number[];
  categories: number[];
  status: boolean;
  created_date: string;
  updated_date: string;
  published_date: string;
  active_promotions:
    | null
    | {
        discount: number;
        valid_from: string;
        valid_to: string;
        description: string;
      }[];
  price_after_promotion: number;
  total_discount: number;
  image_urls: string[];
  weight: number;
  IngredientsAnalysis?: string;
  ShippingReturns?: string;
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const page = async (props: { params: { productId: string } }) => {
  const data = await getSingleProduct(props.params.productId);

  return <ProductDetails product={data} />;
};

async function getSingleProduct(productId: string) {
  const res = await axiosInstance
    .get<Product>(`/shop/api/v1/products/${productId}`)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('error');
    });

  return res;
}

export default page;
