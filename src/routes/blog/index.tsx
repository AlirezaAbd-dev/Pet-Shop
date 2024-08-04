import React from 'react';

import Footer from '@/components/shared/footer.component';

import BlogHero from './components/blog-hero.component';
import BlogItems from './components/blog-items.component';

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogItems />
      <Footer />
    </>
  );
};

export default Blog;
