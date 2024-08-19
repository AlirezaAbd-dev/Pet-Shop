'use client';

import LoadingSpinner from '@/components/ui/loading-spinner';

import AddCategoryForm from './add-category.form';
import { useAdminCategoriesStore } from './admin-categories.store';
import AdminCategoryCard from './admin-category-card.component';
import DeleteCategoryModal from './delete-category.modal';
import useAdminCategoriesQuery from './queries/admin-categories.query';

const AdminCategories = () => {
  const { data, isPending } = useAdminCategoriesQuery();
  const categoryEditMode = useAdminCategoriesStore((s) => s.categoryEditMode);

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data)
    return (
      <main className="mt-8">
        <DeleteCategoryModal />
        <section className="bg-white border border-nature-800 rounded-2xl p-6">
          <p className="text-black font-bold text-xl">
            {categoryEditMode ? 'Edit category' : 'Create a new category'}
          </p>
          <AddCategoryForm />
        </section>
        <section className="mt-8 bg-white border border-nature-800 rounded-2xl p-6">
          <p className="font-bold text-xl">Category list</p>
          <ul className="mt-11 flex flex-wrap gap-28">
            {data.map((item) => (
              <AdminCategoryCard key={item.id} category={item} />
            ))}
          </ul>
        </section>
      </main>
    );
};

export default AdminCategories;
