'use client';

import React from 'react';

import SvgEdit32 from '@/assets/svg/Pen, Edit-orange-32.svg';
import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgDeleteRed32 from '@/assets/svg/Trash, Delete, Bin-red32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminCategoriesQuery from './admin-categories.query';

const AdminCategories = () => {
  const { data, isPending } = useAdminCategoriesQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data)
    return (
      <main className="mt-8">
        <section className="bg-white border border-nature-800 rounded-2xl p-6">
          <p className="text-black font-bold text-xl">Create a new category</p>
          <form className="mt-6">
            <div className="flex gap-6">
              <div className="w-full">
                <p>Name category</p>
                <Input className="mt-4" />
              </div>
              <div className="w-full">
                <p className="text-text-300">Upload image</p>
                <Input type="file" className="mt-4" placeholder="Upload file" />
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-semibold text-lg">Name File</p>
                  <Icon className="flex gap-3 items-center">
                    <SvgEye32 />
                    <SvgDelete32 />
                  </Icon>
                </div>
              </div>
            </div>
            <Button
              variant={'confirm'}
              className="mt-4 w-[142px] rounded-lg md:text-sm h-11"
            >
              Confirmation
            </Button>
          </form>
        </section>
        <section className="mt-8 bg-white border border-nature-800 rounded-2xl p-6">
          <p className="font-bold text-xl">Category list</p>
          <ul className="mt-11 flex flex-wrap gap-28">
            {data.map((item) => (
              <li key={item.id} className="group">
                <div className="rectangle w-[158px] h-[153px] bg-nature-700 flex items-center justify-center">
                  <img src={item.image} />
                </div>
                <p className="mt-6 font-bold text-xl text-center">
                  {item.name}
                </p>
                <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100">
                  <SvgDeleteRed32 className="cursor-pointer" />
                  <SvgEdit32 className="cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
};

export default AdminCategories;
