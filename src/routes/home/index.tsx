import HomeLanding from './components/HomeLanding.component';
import HomeNavbar from './components/HomeNavbar.component';
import HomeTopCategories from './components/HomeTopCategories.component';

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeLanding />
      <HomeTopCategories />
    </>
  );
};

export default Home;
