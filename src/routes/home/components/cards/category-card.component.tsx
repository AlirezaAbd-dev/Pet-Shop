import { useRouter } from 'next/navigation';
import React from 'react';

import { Category } from '@/app/(core)/shop/page';
import { cn } from '@/lib/utils';

type CategoryCardProps = {
  category: Category;
  totalLength: number;
  index: number;
};

const CategoryCard = (props: CategoryCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/shop?category=${props.category.id}`);
      }}
      className={cn(
        'flex flex-col items-center gap-3 md:gap-6 cursor-pointer w-full',
        props.totalLength - 1 === props.index && props.totalLength % 2 !== 0
          ? 'col-span-1'
          : '',
      )}
    >
      <div className="flex items-center w-full md:w-full aspect-video bg-nature-700 rounded-xl overflow-hidden">
        <img
          src={props.category.image}
          alt={props.category.name}
          className="w-full h-full object-fill"
        />
      </div>
      <p className="text-sm md:text-xl font-bold text-center">
        {props.category.name}
      </p>
    </div>
  );
};

export default CategoryCard;
