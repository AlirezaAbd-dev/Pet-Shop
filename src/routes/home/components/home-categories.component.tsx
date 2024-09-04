'use client';

import { Category } from '@/app/(core)/shop/page';

import CategoryCard from './cards/category-card.component';

type HomeCategoriesProps = {
  categories: Category[];
};

const HomeCategories = (props: HomeCategoriesProps) => {
  return (
    <main className="mt-16 px-5 md:px-20 md:mt-24">
      <p className="font-nunito font-black text-xl md:text-4xl text-center">
        Category
      </p>

      <section className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 md:gap-y-16 md:gap-x-7">
        {props.categories.map((c, index) => (
          <CategoryCard
            key={c.id}
            category={c}
            index={index}
            totalLength={props.categories.length}
          />
        ))}
      </section>
    </main>
  );
};

export default HomeCategories;
