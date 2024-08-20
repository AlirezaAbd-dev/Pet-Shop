'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import BlogCard from '@/routes/home/components/cards/tips-card.component';

import { BLOG_TABS, BlogTabsType } from '../blog.constants';

const BlogItems = () => {
  const [tabValue, setTabValue] = useState<BlogTabsType>('Cat');

  return (
    <main className="mt-6 md:mt-16 px-5 md:px-20">
      <section className="flex justify-between items-center">
        <h1 className="font-nunito font-bold text-lg md:text-[32px]">
          All posts
        </h1>
        <ul className="flex gap-4 md:gap-6 max-w-[150px] md:max-w-full overflow-x-auto no-scrollbar">
          {BLOG_TABS.map((item) => (
            <li
              key={item.name}
              onClick={() => setTabValue(item.name)}
              className={cn(
                'text-sm md:text-lg font-nunito py-2 cursor-pointer',
                tabValue === item.name
                  ? 'underline-active font-bold text-primary-500'
                  : '',
              )}
            >
              <p className={tabValue === item.name ? '-translate-y-0.5' : ''}>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-y-9">
        <BlogCard image="tip-cat3.png" />
        <BlogCard image="tip-cat2.png" />
        <BlogCard image="tip-cat.png" />
        <BlogCard image="tip-cat3.png" />
        <BlogCard image="tip-cat2.png" />
        <BlogCard image="tip-cat.png" />
      </section> */}
    </main>
  );
};

export default BlogItems;
