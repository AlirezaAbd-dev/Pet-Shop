import ProductDetails from '@/routes/product-details';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
  features: string;
  pets: number[];
  categories: number[];
  status: boolean;
  created_date: string;
  updated_date: string;
  published_date: string;
  active_promotions: {
    discount: number;
    valid_from: string;
    valid_to: string;
    description: string;
  }[];
  price_after_promotion: number;
  total_discount: number;
  image_urls: string[];
};

export const dynamic = 'force-dynamic';

const page = async (props: { params: { productId: string } }) => {
  const data = await getSingleProduct(props.params.productId);

  return <ProductDetails product={data} />;
};

async function getSingleProduct(productId: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/shop/api/v1/products/${productId}`,
    { method: 'GET' },
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return (await res.json()) as Product;
}

export default page;
