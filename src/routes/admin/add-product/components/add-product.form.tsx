'use client';

import React from 'react';

import SvgDelete24 from '@/assets/svg/Trash, Delete, Bin24.svg';
import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AddProductForm = () => {
  return (
    <form className="mt-8">
      <div className="flex gap-6">
        <div className="w-full">
          <p>Name product*</p>
          <Input className="mt-4" />
        </div>
        <div className="w-full">
          <p>Weight*</p>
          <Input className="hide-arrows mt-4" type="number" />
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Price*</p>
          <Input
            className="hide-arrows mt-4 placeholder:text-text-500"
            type="number"
            placeholder="$"
          />
        </div>
        <div className="w-full">
          <p>inventory*</p>
          <Input className="hide-arrows mt-4" type="number" />
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Discount</p>
          <Input
            className="hide-arrows mt-4 placeholder:text-text-500"
            type="number"
            placeholder="$"
          />
        </div>
        <div className="w-full">
          <p>Amazing offer</p>

          <Input
            type="date"
            className="mt-4"
            onChange={(e) => {
              console.log(e.target.valueAsDate);
            }}
          />
          <div className="flex justify-between items-center mt-4">
            <p>Friday, July 19, 2024</p>
            <SvgDelete24 />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p>Information*</p>
        <Textarea className="mt-4 h-[121px]" />
      </div>

      <div className="mt-8">
        <p className="text-text-300">Upload image product*</p>
        <Input className="mt-4" placeholder="Upload file" />
      </div>

      <ul>
        <li className="mt-4 flex justify-between items-center">
          <p className="font-semibold text-lg">Name File</p>
          <Icon className="flex gap-3 items-center">
            <SvgEye32 />
            <SvgDelete32 />
          </Icon>
        </li>
        <li className="mt-4 flex justify-between items-center">
          <p className="font-semibold text-lg">Name File</p>
          <Icon className="flex gap-3 items-center">
            <SvgEye32 />
            <SvgDelete32 />
          </Icon>
        </li>
        <li className="mt-4 flex justify-between items-center">
          <p className="font-semibold text-lg">Name File</p>
          <Icon className="flex gap-3 items-center">
            <SvgEye32 />
            <SvgDelete32 />
          </Icon>
        </li>
        <li className="mt-4 flex justify-between items-center">
          <p className="font-semibold text-lg">Name File</p>
          <Icon className="flex gap-3 items-center">
            <SvgEye32 />
            <SvgDelete32 />
          </Icon>
        </li>
      </ul>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Details*</p>
        <Textarea className="mt-4 h-[121px]" />
      </div>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Ingredients & Analysis</p>
        <Textarea className="mt-4 h-[121px]" />
      </div>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Shipping & Returns</p>
        <Textarea className="mt-4 h-[121px]" />
      </div>

      <Button className="md:text-base w-full rounded-xl mt-12">
        Confirmation
      </Button>
    </form>
  );
};

export default AddProductForm;
