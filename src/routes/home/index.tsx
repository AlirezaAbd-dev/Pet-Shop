import HomeLanding from './components/home-landing.component';
import HomeNavbar from './components/home-navbar.component';
import HomeOurPromise from './components/home-our-promise.component';
import HomeTopCategories from './components/home-top-categories.component';
import HomeTopSellingProducts from './components/home-top-selling-products.component';

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeLanding />
      <HomeTopCategories />
      <HomeOurPromise />
      <HomeTopSellingProducts />
    </>
  );
};

export default Home;
