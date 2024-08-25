'use client';

import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminCategoriesQuery from '../categories/queries/admin-categories.query';
import AddCategoryForm from './add-category.form';
import AdminSubCategoryCard from './admin-category-card.component';
import { useAdminSubCategoriesStore } from './admin-sub-categories.store';
import DeleteSubCategoryModal from './delete-sub-category.modal';
import useAdminSubCategoriesQuery from './queries/admin-sub-categories.query';

const AdminSubCategories = () => {
  const { data, isPending } = useAdminCategoriesQuery();
  const { data: subCategories, isPending: isSubCategoriesPending } =
    useAdminSubCategoriesQuery();
  const categoryEditMode = useAdminSubCategoriesStore(
    (s) => s.subCategoryEditMode,
  );

  if (isPending || isSubCategoriesPending)
    return <LoadingSpinner className="mt-20" />;

  if (!isPending && !isSubCategoriesPending && data && subCategories)
    return (
      <main className="mt-8">
        <DeleteSubCategoryModal />
        <section className="bg-white border border-nature-800 rounded-2xl p-6">
          <p className="text-black font-bold text-xl">
            {categoryEditMode
              ? 'Edit sub-category'
              : 'Create a new sub-category'}
          </p>
          <AddCategoryForm categories={data} />
        </section>
        <section className="mt-8 bg-white border border-nature-800 rounded-2xl p-6">
          <p className="font-bold text-xl">Sub-category list</p>
          <ul className="mt-11 flex flex-wrap gap-28">
            {subCategories.map((item) => (
              <AdminSubCategoryCard key={item.id} subCategory={item} />
            ))}
          </ul>
        </section>
      </main>
    );
};

export default AdminSubCategories;
