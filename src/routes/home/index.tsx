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

const Home = () => {
  return (
    <>
      <HomeLanding />
      <HomeTopCategories />
      <HomeOurPromise />
      <HomeSuperSale />
      <HomeCategories />
      <HomeTopSellingProducts />
      <HomeBrandsWeLove />
      <HomeFAQ />
      <HomeTips />
      <HomeAchievements />
      <Footer />
    </>
  );
};

export default Home;
