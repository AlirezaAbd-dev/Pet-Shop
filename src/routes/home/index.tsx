import { Product } from '@/app/(core)/product/[productId]/page';
import { Brand, Category } from '@/app/(core)/shop/page';
import { axiosInstance } from '@/lib/constants/axios';

import Footer from '../../components/shared/footer.component';
import HomeAchievements from './components/home-achievements.componen';
import HomeBrandsWeLove from './components/home-brands-we-love.component';
import HomeCategories from './components/home-categories.component';
import HomeFAQ from './components/home-faq.component';
import HomeLanding from './components/home-landing.component';
import HomeOurPromise from './components/home-our-promise.component';
import HomeSuperSale from './components/home-super-sale.component';
import HomeTips from './components/home-tips.component';
import HomeTopCategories from './components/home-top-categories.component';
import HomeTopSellingProducts from './components/home-top-selling-products.component';

export const dynamic = 'force-dynamic';

const Home = async () => {
  const [bestSelling, brands, categories, onSales, topCategories, pets] =
    await getHomePageData();

  return (
    <>
      <HomeLanding />
      <HomeTopCategories products={topCategories} />
      <HomeOurPromise />
      <HomeSuperSale products={onSales} />
      <HomeCategories categories={categories} />
      <HomeTopSellingProducts products={bestSelling} />
      <HomeBrandsWeLove brands={brands} />
      <HomeFAQ />
      <HomeTips />
      <HomeAchievements />
      <Footer />
    </>
  );
};

export type Pet = {
  id: number;
  species: string;
  image: string | null;
};

async function getHomePageData() {
  const results = await Promise.allSettled([
    axiosInstance
      .get<Product[]>('/shop/api/v1/homepage/best-selling/')
      .then((res) => res.data),
    axiosInstance
      .get<Brand[]>('/shop/api/v1/homepage/brands/')
      .then((res) => res.data),
    axiosInstance
      .get<Category[]>('/shop/api/v1/homepage/categories-list/')
      .then((res) => res.data),
    axiosInstance
      .get<Product[]>('/shop/api/v1/homepage/sale/')
      .then((res) => res.data),
    axiosInstance
      .get<Product[]>('/shop/api/v1/homepage/top-products/')
      .then((res) => res.data),
    axiosInstance.get<Pet[]>('/shop/api/v1/pets/').then((res) => res.data),
  ]);

  const rejectedIndex = results.findIndex((r) => r.status === 'rejected');

  if (rejectedIndex !== -1) {
    throw new Error('Something went wrong!');
  }

  const fulfilledResults = results.filter(
    (r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled',
  );
  return [
    fulfilledResults[0].value,
    fulfilledResults[1].value,
    fulfilledResults[2].value,
    fulfilledResults[3].value,
    fulfilledResults[4].value,
    fulfilledResults[5].value,
  ] as [Product[], Brand[], Category[], Product[], Product[], Pet[]];
}

export default Home;
