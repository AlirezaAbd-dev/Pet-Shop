import { X } from 'lucide-react';

import SvgEdit32 from '@/assets/svg/Pen, Edit-orange-32.svg';
import SvgDeleteRed32 from '@/assets/svg/Trash, Delete, Bin-red32.svg';
import { cn } from '@/lib/utils';

import { useAdminSubCategoriesStore } from './admin-sub-categories.store';
import { SubCategory } from './queries/admin-sub-categories.query';

type Props = {
  subCategory: SubCategory;
};

const AdminSubCategoryCard = (props: Props) => {
  const setIsDeletecategorymodalOpen = useAdminSubCategoriesStore(
    (s) => s.setIsDeleteSubCategoryModeOpen,
  );
  const categoryEditMode = useAdminSubCategoriesStore(
    (s) => s.subCategoryEditMode,
  );
  const setCategoryEditMode = useAdminSubCategoriesStore(
    (s) => s.setSubCategoryEditMode,
  );

  const isEditMode = categoryEditMode?.id === props.subCategory.id;

  return (
    <li key={props.subCategory.id} className="group">
      <div className="p-4 border border-nature-900 rounded-xl">
        <p className="textxl font-bold text-center">name</p>
        <p className="mt-1 text-base text-center">{props.subCategory.name}</p>
        <p className="textxl font-bold text-center mt-3">Category name</p>
        <p className="mt-1 text-base text-center">
          {props.subCategory.categoryName}
        </p>
      </div>
      <div
        className={cn(
          'flex justify-center gap-4 mt-4 group-hover:opacity-100',
          isEditMode ? 'opacity-1000' : 'opacity-0',
        )}
      >
        <SvgDeleteRed32
          className="cursor-pointer"
          onClick={() => {
            setIsDeletecategorymodalOpen(String(props.subCategory.id));
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
              setCategoryEditMode(props.subCategory);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default AdminSubCategoryCard;
