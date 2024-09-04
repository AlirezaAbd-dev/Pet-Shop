import { X } from 'lucide-react';
import React from 'react';

import { Category } from '@/app/(core)/shop/page';
import SvgEdit32 from '@/assets/svg/Pen, Edit-orange-32.svg';
import SvgDeleteRed32 from '@/assets/svg/Trash, Delete, Bin-red32.svg';
import { cn } from '@/lib/utils';

import { useAdminCategoriesStore } from './admin-categories.store';

type Props = {
  category: Category;
};

const AdminCategoryCard = (props: Props) => {
  const setIsDeletecategorymodalOpen = useAdminCategoriesStore(
    (s) => s.setIsDeleteCategorymodlOpen,
  );
  const categoryEditMode = useAdminCategoriesStore((s) => s.categoryEditMode);
  const setCategoryEditMode = useAdminCategoriesStore(
    (s) => s.setCategoryEditMode,
  );

  const isEditMode = categoryEditMode?.id === props.category.id;

  return (
    <li
      key={props.category.id}
      className="group flex flex-col items-center w-[200px]"
    >
      <div className="w-[158px] h-[90px] bg-nature-700 flex items-center justify-center overflow-hidden rounded-lg">
        <img src={props.category.image} className="w-full h-full object-fill" />
      </div>
      <p className="mt-6 font-bold text-xl text-center">
        {props.category.name}
      </p>
      <div
        className={cn(
          'flex justify-center gap-4 mt-4 group-hover:opacity-100',
          isEditMode ? 'opacity-1000' : 'opacity-0',
        )}
      >
        <SvgDeleteRed32
          className="cursor-pointer"
          onClick={() => {
            setIsDeletecategorymodalOpen(String(props.category.id));
          }}
        />
        {isEditMode ? (
          <X
            className="w-8 h-8 text-error-500 cursor-pointer"
            onClick={() => {
              setCategoryEditMode(undefined);
            }}
          />
        ) : (
          <SvgEdit32
            className="cursor-pointer"
            onClick={() => {
              setCategoryEditMode(props.category);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default AdminCategoryCard;
