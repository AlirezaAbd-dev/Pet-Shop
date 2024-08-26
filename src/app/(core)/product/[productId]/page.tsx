import { Metadata } from 'next';

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
  subcategories: number[];
  status: boolean;
  created_date: string;
  updated_date: string;
  published_date: string;
  internal_price: number;
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
  is_best_selling: boolean;
  is_top: boolean;
  is_on_sale: boolean;
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const data = await getSingleProduct(params.productId);

  return {
    title: `uspetinc - ${data.name}`,
  };
};

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
