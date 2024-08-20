import { Product } from '@/app/(core)/product/[productId]/page';
import { Brand, Category } from '@/app/(core)/shop/page';
import { axiosBlog, axiosInstance } from '@/lib/constants/axios';

import Footer from '../../components/shared/footer.component';
import Banners1 from './components/banners-1.component';
import Banners2 from './components/banners-2.component';
import HomeAchievements from './components/home-achievements.componen';
import HomeBrandsWeLove from './components/home-brands-we-love.component';
import HomeCategories from './components/home-categories.component';
import HomeFAQ from './components/home-faq.component';
import HomeLanding from './components/home-landing.component';
import HomeOurPromise from './components/home-our-promise.component';
import HomePets from './components/home-pets.component';
import HomeSuperSale from './components/home-super-sale.component';
import HomeBlog from './components/home-tips.component';
import HomeTopCategories from './components/home-top-categories.component';
import HomeTopSellingProducts from './components/home-top-selling-products.component';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Home = async () => {
  const [
    bestSelling,
    brands,
    categories,
    onSales,
    topCategories,
    pets,
    banners,
    blog,
  ] = await getHomePageData();

  return (
    <>
      <HomeLanding />
      <HomeTopCategories products={topCategories} />
      <HomePets pets={pets} />
      <Banners1 banners={banners} />
      <HomeSuperSale products={onSales} />
      <HomeCategories categories={categories} />
      <HomeTopSellingProducts products={bestSelling} />
      <Banners2 banners={banners} />
      <HomeOurPromise />
      <HomeBrandsWeLove brands={brands} />
      <HomeFAQ />
      <HomeBlog blog={blog} />
      <HomeAchievements />
      <Footer />
    </>
  );
};

export type Pet = {
  id: number;
  species: string;
  image: string;
};

export type Banner = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  updated_at: string;
};

export type Blog = {
  title: string;
  image: string;
  description: string;
  date: string;
  link: string;
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
    axiosInstance
      .get<Banner[]>('/shop/api/v1/homepage/banners/')
      .then((res) => res.data),
    axiosBlog
      .get<Blog[]>('/blog/wp-json/uspet/v1/posts')
      .then((res) => res.data),
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
    fulfilledResults[6].value,
    fulfilledResults[7].value,
  ] as [
    Product[],
    Brand[],
    Category[],
    Product[],
    Product[],
    Pet[],
    Banner[],
    Blog[],
  ];
}

export default Home;
