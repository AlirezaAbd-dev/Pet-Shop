import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Category } from '@/app/(core)/shop/page';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';

import { useAdminSubCategoriesStore } from './admin-sub-categories.store';
import useAdminAddSubCategoruMutation from './queries/admin-add-sub-category.mutation';
import useAdminEditCategoruMutation from './queries/admin-edit-category.mutation';

type Props = {
  categories: Category[];
};

const AddCategoryForm = (props: Props) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState<number>();

  const { mutateAsync: addSubCategory, isPending: addSubCategoryPending } =
    useAdminAddSubCategoruMutation();
  const { mutateAsync: editSubCategory, isPending: editSubCategoryPending } =
    useAdminEditCategoruMutation();

  const categoryEditMode = useAdminSubCategoriesStore(
    (s) => s.subCategoryEditMode,
  );
  const setCategoryEditMode = useAdminSubCategoriesStore(
    (s) => s.setSubCategoryEditMode,
  );

  useEffect(() => {
    setCategoryName(categoryEditMode?.name || '');
    setCategoryId(categoryEditMode?.category);
  }, [categoryEditMode]);

  async function submitHandler(e: any) {
    e.preventDefault();

    if (!categoryName || !categoryId) {
      return toast.error('Please fill the fields');
    }

    if (!categoryEditMode) {
      await addSubCategory({ category: categoryId, name: categoryName });
    } else {
      await editSubCategory({
        category: { category: categoryId, name: categoryName },
        id: categoryEditMode.id,
      });
      setCategoryEditMode(undefined);
    }

    setCategoryId(undefined);
    setCategoryName('');
  }

  return (
    <form className="mt-6" onSubmit={submitHandler}>
      <div className="flex gap-6">
        <div className="w-full">
          <p>Name sub-category</p>
          <Input
            className="mt-4"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <p className="text-text-300">Category</p>
          <Combobox
            data={props.categories.map((c) => ({
              label: c.name,
              value: c.id.toString(),
            }))}
            name="sub-category"
            value={categoryId?.toString() || ''}
            buttonClassName="mt-4 border-none bg-nature-600 md:h-12 rounded-xl"
            onSelect={(_, value) => {
              setCategoryId(+value);
            }}
          />
        </div>
      </div>
      <Button
        variant={
          addSubCategoryPending || editSubCategoryPending
            ? 'disabled'
            : 'confirm'
        }
        disabled={addSubCategoryPending || editSubCategoryPending}
        isLoading={addSubCategoryPending || editSubCategoryPending}
        className="mt-4 w-[142px] rounded-lg md:text-sm h-11"
      >
        Confirmation
      </Button>
    </form>
  );
};

export default AddCategoryForm;
