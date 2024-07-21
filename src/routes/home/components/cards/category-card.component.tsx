import React from 'react';

import { Category } from '@/app/(core)/shop/page';
import { cn } from '@/lib/utils';

type CategoryCardProps = {
  category: Category;
  totalLength: number;
  index: number;
};

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3',
        props.totalLength - 1 === props.index && props.totalLength % 2 !== 0
          ? 'col-span-2'
          : '',
      )}
    >
      <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
        <img src={props.category.image} alt={props.category.name} />
      </div>
      <p className="text-sm font-bold">{props.category.name}</p>
    </div>
  );
};

export default CategoryCard;