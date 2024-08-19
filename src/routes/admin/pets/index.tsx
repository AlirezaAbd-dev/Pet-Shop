'use client';

import React from 'react';

import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminPetsQuery from '../add-product/queries/admin-pets.query';
import AddPetForm from './add-pet.form';
import AdminPetCard from './admin-pet-card.component';
import { useAdminPetsStore } from './admin-pets.store';
import DeletePetModal from './delete-pet.modal';

const AdminPets = () => {
  const { data, isPending } = useAdminPetsQuery();
  const categoryEditMode = useAdminPetsStore((s) => s.petEditMode);

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data)
    return (
      <main className="mt-8">
        <DeletePetModal />
        <section className="bg-white border border-nature-800 rounded-2xl p-6">
          <p className="text-black font-bold text-xl">
            {categoryEditMode ? 'Edit pet' : 'Create a new pet'}
          </p>
          <AddPetForm />
        </section>
        <section className="mt-8 bg-white border border-nature-800 rounded-2xl p-6">
          <p className="font-bold text-xl">Pet list</p>
          <ul className="mt-11 flex flex-wrap gap-28">
            {data.map((item) => (
              <AdminPetCard key={item.id} pet={item} />
            ))}
          </ul>
        </section>
      </main>
    );
};

export default AdminPets;
