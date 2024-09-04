import { FormEventHandler, useEffect, useState } from 'react';
import { toast } from 'sonner';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useAdminCategoriesStore } from './admin-categories.store';
import useAdminAddcategoruMutation from './queries/admin-add-category.mutation';
import useAdminEditCategoruMutation from './queries/admin-edit-category.mutation';

const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState<File>();

  const { mutateAsync: addCategory, isPending: addCategoryPending } =
    useAdminAddcategoruMutation();
  const { mutateAsync: editCategory, isPending: editCategoryPending } =
    useAdminEditCategoruMutation();

  const categoryEditMode = useAdminCategoriesStore((s) => s.categoryEditMode);
  const setCategoryEditMode = useAdminCategoriesStore(
    (s) => s.setCategoryEditMode,
  );

  useEffect(() => {
    setCategoryName(categoryEditMode?.name || '');
    setCategoryImage(undefined);
  }, [categoryEditMode]);

  async function submitHandler(e: any) {
    e.preventDefault();

    if (!categoryEditMode) {
      if (!categoryImage || !categoryName) {
        return toast.error('Please fill the fields');
      }
      const formData = new FormData();

      formData.append('name', categoryName);
      formData.append('image', categoryImage);
      formData.append('is_top', 'true');

      await addCategory(formData);
    } else {
      if (!categoryName) {
        return toast.error('Please fill the fields');
      }
      const formData = new FormData();

      formData.append('name', categoryName);
      if (categoryImage) formData.append('image', categoryImage);
      formData.append('is_top', 'true');

      await editCategory({ category: formData, id: categoryEditMode.id });
      setCategoryEditMode(undefined);
    }

    setCategoryImage(undefined);
    setCategoryName('');
  }

  return (
    <form className="mt-6" onSubmit={submitHandler}>
      <div className="flex gap-6">
        <div className="w-full">
          <p>Name category</p>
          <Input
            className="mt-4"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <p className="text-text-300">Upload image</p>
          <label htmlFor="category-image-input">
            <div className="mt-4 cursor-pointer flex items-center bg-nature-600 h-12 px-3 rounded-lg text-[#A0A0A1]">
              Upload file
            </div>
            <Input
              id="category-image-input"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target?.files?.[0]) setCategoryImage(e.target.files[0]);
              }}
            />
          </label>
          {(categoryImage || categoryEditMode?.image) && (
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold text-lg">
                {categoryImage?.name || categoryEditMode?.image}
              </p>
              <Icon className="flex gap-3 items-center">
                <SvgEye32
                  onClick={() => {
                    if (categoryImage) {
                      const url = URL.createObjectURL(categoryImage);
                      window.open(url);

                      URL.revokeObjectURL(url);
                    }
                    if (categoryEditMode?.image) {
                      window.open(categoryEditMode.image);
                    }
                  }}
                />
                {categoryImage && (
                  <SvgDelete32
                    onClick={() => {
                      setCategoryImage(undefined);
                    }}
                  />
                )}
              </Icon>
            </div>
          )}
        </div>
      </div>
      <Button
        variant={
          addCategoryPending || editCategoryPending ? 'disabled' : 'confirm'
        }
        disabled={addCategoryPending || editCategoryPending}
        isLoading={addCategoryPending || editCategoryPending}
        className="mt-4 w-[142px] rounded-lg md:text-sm h-11"
      >
        Confirmation
      </Button>
    </form>
  );
};

export default AddCategoryForm;
