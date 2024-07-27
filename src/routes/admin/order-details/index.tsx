'use client';

import React from 'react';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import SvgFileBlankListBlue32 from '@/assets/svg/file-blank-list-blue32.svg';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Slider } from '@/components/ui/slider';

const AdminOrderDetails = () => {
  return (
    <main className="mt-6 pb-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink href="/panel/admin/orders">
            Orders managment
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-text-500">
            Details order
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-8 bg-white rounded-2xl p-6">
        <div className="flex justify-between">
          {/* left section */}
          <div>
            <p className="font-bold text-xl">Details order / #451290</p>
            <div className="w-full flex gap-6 mt-12">
              <p className="flex gap-3">
                Order date
                <span className="font-bold">12 Jan 2023</span>
              </p>
              <p className="flex gap-3">
                Transferee
                <span className="font-bold">milad saeedi</span>
              </p>
              <p className="flex gap-3">
                Phone
                <span className="font-bold">09304673884</span>
              </p>
            </div>
            <p className="flex gap-3 mt-8">
              Street address
              <span className="font-bold">
                Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
                scing elit
              </span>
            </p>

            <div className="flex gap-6 mt-4">
              <p className="flex gap-3">
                Country / Region
                <span className="font-bold">Iran</span>
              </p>
              <p className="flex gap-3">
                Town / City
                <span className="font-bold">Azadi 5</span>
              </p>
              <p className="flex gap-3">
                Postcode
                <span className="font-bold">677123411</span>
              </p>
            </div>
          </div>
          {/* end of left section */}
          {/* right section */}
          <div className="w-[251px]">
            <p className="font-bold">Paid</p>
            <Slider
              value={[70]}
              className="mt-4"
              thumbClassname="bg-success-500 border-inherit"
              rangeClassname="bg-success-500"
            />
            <p className="mt-8">Order state</p>
            <Combobox
              name="status"
              buttonClassName="mt-3"
              data={[
                { label: 'delivered', value: 'delivered' },
                { label: 'cancelled', value: 'cancelled' },
              ]}
            />
            <Button className="mt-4 md:text-sm w-full">Confirmation</Button>
          </div>
          {/* end of right section */}
        </div>
        <div className="mt-8 w-full border-t border-nature-900"></div>

        <ul className="grid grid-cols-2 gap-y-8 mt-8">
          <li className="flex gap-6">
            <div className="flex justify-center items-center w-[160px] h-[160px] bg-nature-700 rounded-xl">
              <img
                src="https://api.ark-24.ir/media/product_images/image_44.png"
                className="h-[133px] w-auto"
              />
            </div>
            <div>
              <p className="text-xl font-bold">Royal Canin Urinary</p>
              <p className="mt-4 font-semibold text-lg text-text-400">50KG</p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Number: 3
              </p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Price: $123.98
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <div className="flex justify-center items-center w-[160px] h-[160px] bg-nature-700 rounded-xl">
              <img
                src="https://api.ark-24.ir/media/product_images/image_44.png"
                className="h-[133px] w-auto"
              />
            </div>
            <div>
              <p className="text-xl font-bold">Royal Canin Urinary</p>
              <p className="mt-4 font-semibold text-lg text-text-400">50KG</p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Number: 3
              </p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Price: $123.98
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <div className="flex justify-center items-center w-[160px] h-[160px] bg-nature-700 rounded-xl">
              <img
                src="https://api.ark-24.ir/media/product_images/image_44.png"
                className="h-[133px] w-auto"
              />
            </div>
            <div>
              <p className="text-xl font-bold">Royal Canin Urinary</p>
              <p className="mt-4 font-semibold text-lg text-text-400">50KG</p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Number: 3
              </p>
              <p className="mt-4 font-semibold text-lg text-text-400">
                Price: $123.98
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-8 bg-white border border-[#004FFE] border-dashed rounded-2xl py-6 flex flex-col items-center">
        <span className="w-[62px] h-[62px] flex items-center justify-center bg-[#004FFE] bg-opacity-5 rounded-xl">
          <SvgFileBlankListBlue32 />
        </span>
        <p className="font-bold text-xl mt-4">upload file</p>
        <p className="mt-4">Upload the payment receipt sent by the customer</p>
      </section>
      <section className="mt-6 flex justify-between items-center">
        <p className="text-lg font-semibold ">Name File</p>
        <div className="flex gap-3 items-center">
          <SvgEye32 />
          <SvgDelete32 />
        </div>
      </section>
    </main>
  );
};

export default AdminOrderDetails;
