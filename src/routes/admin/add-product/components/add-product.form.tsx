'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Brand, Category } from '@/app/(core)/shop/page';
import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { MultipleCombobox } from '@/components/ui/multiple-combobox';
import { Textarea } from '@/components/ui/textarea';
import { Pet } from '@/routes/home';

import { SubCategory } from '../../sub-categories/queries/admin-sub-categories.query';
import useAddProductMutation from '../add-product.mutation';
import {
  AddProductValidationType,
  addProductValidation,
} from '../add-product.validation';

type Props = {
  categories: Category[];
  brands: Brand[];
  pets: Pet[];
  subCategories: SubCategory[];
};

const AddProductForm = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop(acceptedFiles) {
      setFiles(acceptedFiles);
    },
  });

  const { mutate, isPending } = useAddProductMutation();

  const { control, handleSubmit, watch } = useForm<AddProductValidationType>({
    resolver: zodResolver(addProductValidation),
  });

  const submitHandler = (values: AddProductValidationType) => {
    if (files.length <= 4 && files.length > 0) {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('brand', values.brand);
      formData.append('price', values.price.toString());
      formData.append('internal_price', values.internalPrice.toString());
      formData.append('weight', values.weight.toString());
      formData.append('inventory', values.inventory.toString());
      formData.append('published_date', new Date().toISOString());
      if (values.features) formData.append('features', values.features);
      if (values.ingredients)
        formData.append('IngredientsAnalysis', values.ingredients);
      if (values.shipping) formData.append('ShippingReturns', values.shipping);
      if (values.discount)
        formData.append('discount', values.discount?.toString());
      formData.append(
        'is_best_selling',
        values.isBestSelling ? values.isBestSelling : 'false',
      );
      formData.append('is_top', values.isTop ? values.isTop : 'false');
      formData.append(
        'is_on_sale',
        values.isOnSale ? values.isOnSale : 'false',
      );
      values.pets.forEach((item) => {
        formData.append('pets', item.toString());
      });
      values.categories.forEach((item) => {
        formData.append('categories', item.toString());
      });
      values?.subCategories?.forEach((item) => {
        formData.append('subcategories', item.toString());
      });
      files.forEach((item) => {
        formData.append('images', item);
      });
      mutate(formData);
    } else {
      toast.error('Please upload an image for product');
    }
  };

  const categoriesSelected = watch('categories');

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mt-8">
      <div className="flex gap-6">
        <div className="w-full">
          <p>Name product*</p>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                className="mt-4"
              />
            )}
          />
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Internal price*</p>
          <Controller
            control={control}
            name="internalPrice"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                className="hide-arrows mt-4 placeholder:text-text-500"
                type="number"
                placeholder="$"
              />
            )}
          />
        </div>
        <div className="w-full">
          <p>Brand*</p>
          <Controller
            control={control}
            name="brand"
            render={({ field, fieldState }) => (
              <>
                <Combobox
                  name="brand"
                  data={props.brands.map((c) => ({
                    label: c.name,
                    value: c.id.toString(),
                  }))}
                  onSelect={(_, value) => {
                    field.onChange(value.toString());
                  }}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Price*</p>
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                className="hide-arrows mt-4 placeholder:text-text-500"
                type="number"
                placeholder="$"
              />
            )}
          />
        </div>
        <div className="w-full">
          <p>inventory*</p>
          <Controller
            control={control}
            name="inventory"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                className="hide-arrows mt-4"
                type="number"
              />
            )}
          />
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Discount</p>
          <Controller
            control={control}
            name="discount"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                className="hide-arrows mt-4 placeholder:text-text-500"
                type="number"
                placeholder="%"
              />
            )}
          />
        </div>
        <div className="w-full">
          <p>Pet type*</p>
          <Controller
            control={control}
            name="pets"
            render={({ field, fieldState }) => (
              <>
                <MultipleCombobox
                  name="pet"
                  data={props.pets.map((c) => ({
                    label: c.species,
                    value: c.id.toString(),
                  }))}
                  onSelect={(_, value) => {
                    field.onChange(value.map((item) => +item));
                  }}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
        {/* <div className="w-full">
          <p>Amazing offer</p>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                type="date"
                className="mt-4"
              />
            )}
          />
        </div> */}
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Category*</p>
          <Controller
            control={control}
            name="categories"
            render={({ field, fieldState }) => (
              <>
                <MultipleCombobox
                  name="category"
                  data={props.categories.map((c) => ({
                    label: c.name,
                    value: c.id.toString(),
                  }))}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                  onSelect={(_, value) => {
                    field.onChange(value.map((item) => +item));
                  }}
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
        <div className="w-full">
          <p>Sub-category</p>
          <Controller
            control={control}
            name="subCategories"
            render={({ field, fieldState }) => (
              <>
                <MultipleCombobox
                  name="sub-categroy"
                  data={props.subCategories
                    .filter((c) => categoriesSelected?.includes(c.category))
                    .map((c) => ({
                      label: c.name,
                      value: c.id.toString(),
                    }))}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                  onSelect={(_, value) => {
                    field.onChange(value.map((item) => +item));
                  }}
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
      </div>
      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Weight*</p>
          <Controller
            control={control}
            name="weight"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                errorText={fieldState.error?.message}
                placeholder="KG"
                className="hide-arrows mt-4"
                type="number"
              />
            )}
          />
        </div>
        <div className="w-full">
          <p>Is best selling*</p>
          <Controller
            control={control}
            name="isBestSelling"
            render={({ field, fieldState }) => (
              <>
                <Combobox
                  name="isBestSelling"
                  data={[
                    { label: 'Yes', value: 'true' },
                    { label: 'No', value: 'false' },
                  ]}
                  noneEmpty
                  defaultValue="false"
                  onSelect={(_, value) => {
                    field.onChange(value);
                  }}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
      </div>
      <div className="flex gap-6 mt-8">
        <div className="w-full">
          <p>Is top*</p>
          <Controller
            control={control}
            name="isTop"
            render={({ field, fieldState }) => (
              <>
                <Combobox
                  name="isTop"
                  data={[
                    { label: 'Yes', value: 'true' },
                    { label: 'No', value: 'false' },
                  ]}
                  noneEmpty
                  defaultValue="false"
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                  onSelect={(_, value) => {
                    field.onChange(value);
                  }}
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
        <div className="w-full">
          <p>Is on sale*</p>
          <Controller
            control={control}
            name="isOnSale"
            render={({ field, fieldState }) => (
              <>
                <Combobox
                  name="isOnSale"
                  data={[
                    { label: 'Yes', value: 'true' },
                    { label: 'No', value: 'false' },
                  ]}
                  noneEmpty
                  defaultValue="false"
                  onSelect={(_, value) => {
                    field.onChange(value);
                  }}
                  buttonClassName="mt-4 md:h-12 border-none bg-nature-600"
                  containerClassName="w-[400px]"
                />
                <p className="mt-1 text-sm text-error-500">
                  {fieldState.error?.message}
                </p>
              </>
            )}
          />
        </div>
      </div>

      <div className="mt-8">
        <p>Short description*</p>
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <>
              <Textarea {...field} className="mt-4 h-[121px]" />
              <p className="mt-1 text-sm text-error-500">
                {fieldState.error?.message}
              </p>
            </>
          )}
        />
      </div>

      <div className="mt-8">
        <p className="text-text-300">Upload image product*</p>
        <div
          {...getRootProps()}
          className="flex items-center px-4 py-2 h-12 rounded-xl bg-nature-600 mt-3 text-text-300 whitespace-nowrap cursor-pointer"
        >
          Upload file
          <Input {...getInputProps()} />
        </div>
      </div>

      <ul>
        {files.length > 4 && (
          <p className="mt-4 text-error-500">
            Maximum 4 images are allowed to upload
          </p>
        )}
        {files.map((item) => (
          <li
            key={item.name}
            className="mt-4 flex justify-between items-center"
          >
            <p className="font-semibold text-lg">{item.name}</p>
            <Icon className="flex gap-3 items-center">
              <SvgEye32
                className="cursor-pointer"
                onClick={() => {
                  const url = URL.createObjectURL(item);
                  window.open(url);
                }}
              />
              <SvgDelete32
                className="cursor-pointer"
                onClick={() => {
                  setFiles((prev) => {
                    const oldData = [...prev];

                    const findIndex = oldData.findIndex(
                      (p) => p.name === item.name,
                    );

                    if (findIndex !== -1) {
                      oldData.splice(findIndex, 1);
                      return oldData;
                    }

                    return oldData;
                  });
                }}
              />
            </Icon>
          </li>
        ))}
      </ul>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Details</p>
        <Controller
          control={control}
          name="features"
          render={({ field, fieldState }) => (
            <>
              <Textarea {...field} className="mt-4 h-[121px]" />
              <p className="mt-1 text-sm text-error-500">
                {fieldState.error?.message}
              </p>
            </>
          )}
        />
      </div>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Ingredients & Analysis</p>
        <Controller
          control={control}
          name="ingredients"
          render={({ field, fieldState }) => (
            <>
              <Textarea {...field} className="mt-4 h-[121px]" />
              <p className="mt-1 text-sm text-error-500">
                {fieldState.error?.message}
              </p>
            </>
          )}
        />
      </div>

      <div className="mt-9 border-t border-nature-900"></div>

      <div className="mt-8">
        <p>Shipping & Returns</p>
        <Controller
          control={control}
          name="shipping"
          render={({ field, fieldState }) => (
            <>
              <Textarea {...field} className="mt-4 h-[121px]" />
              <p className="mt-1 text-sm text-error-500">
                {fieldState.error?.message}
              </p>
            </>
          )}
        />
      </div>

      <Button
        isLoading={isPending}
        disabled={isPending}
        variant={isPending ? 'disabled' : 'default'}
        type="submit"
        className="md:text-base w-full rounded-xl mt-12"
      >
        Confirmation
      </Button>
    </form>
  );
};

export default AddProductForm;
