import React from 'react';

import { Brand } from '@/app/(core)/shop/page';
import Footer from '@/components/shared/footer.component';
import { axiosInstance } from '@/lib/constants/axios';

import HomeBrandsWeLove from '../home/components/home-brands-we-love.component';
import AboutusFounder from './components/about-us-founder.component';
import AboutUsGallery from './components/about-us-gallery.component';
import AboutUsHero from './components/about-us-hero.component';
import AboutUsInfo from './components/about-us-info.component';
import AboutUsWhatWeProvide from './components/about-us-what-we-provide.component';
import AboutUsWhy from './components/why-rely/about-us-why.component';

const AboutUs = async () => {
  const brands = await getData();

  return (
    <>
      <AboutUsHero />
      <HomeBrandsWeLove brands={brands} />
      <AboutUsInfo />
      <AboutUsWhatWeProvide />
      <AboutusFounder />
      <AboutUsGallery />
      <AboutUsWhy />
      <Footer />
    </>
  );
};

const getData = async () => {
  const response = await axiosInstance
    .get<Brand[]>('/shop/api/v1/homepage/brands/')
    .then((res) => res.data);

  return response;
};

export default AboutUs;
