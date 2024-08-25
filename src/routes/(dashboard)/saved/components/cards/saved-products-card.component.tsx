'use client';

import Link from 'next/link';

import SvgDeleteRed24 from '@/assets/svg/delete-red-24.svg';
import SvgLongArrowRed20 from '@/assets/svg/long-arrow-red-20.svg';
import SvgPolygon56 from '@/assets/svg/polygon-56.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

import SvgWeightDesktop from '@icons/weight-desktop.svg';
import SvgWeight from '@icons/weight.svg';

type Props = {
  id: number;
  discount: number;
  image: string;
  name: string;
  weight: number;
  description: string;
  price: number;
  priceWithDiscount: number;
};

const SavedProductCard = (props: Props) => {
  const setIsDeleteSavedProductModalOpen = useDashboardModalsStore(
    (s) => s.setIsDeleteSavedProductModalOpen,
  );

  return (
    <div className="flex flex-col border border-nature-800 rounded-2xl p-4">
      <div className="relative flex justify-center items-center h-[152px]">
        <Icon
          className={cn(
            'absolute -top-[20px] -left-[20px]',
            props.discount === 0 ? 'hidden' : '',
          )}
        >
          <SvgPolygon56 />
          <p
            className={cn(
              'absolute  font-nunito font-black text-sm text-white',
              props.discount > 0 && props.discount < 100
                ? 'top-[32px] left-[30px]'
                : '',
              props.discount === 100 ? 'top-[32px] left-[25px]' : '',
            )}
          >
            {props.discount}%
          </p>
        </Icon>
        <Icon
          onClick={() => setIsDeleteSavedProductModalOpen(props.id.toString())}
          className="absolute right-0 top-0 flex justify-center items-center cursor-pointer"
        >
          <SvgDeleteRed24 />
        </Icon>
        <img src={props.image} alt={props.name} className="h-[132px]" />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <p className="font-bold font-nunito md:text-xl max-w-[152px]">
          {props.name.length > 14
            ? props.name.slice(0, 14) + '...'
            : props.name}
        </p>
        <Icon className="flex md:items-center gap-1 text-sm md:text-base font-bold">
          <SvgWeight className="md:hidden w-5 h-5" />
          <SvgWeightDesktop className="hidden md:block" />
          {props.weight}KG
        </Icon>
      </div>
      <p className="text-sm md:text-base mt-3 leading-[26px] md:leading-7">
        {props.description.length > 30
          ? props.description.slice(0, 30) + '...'
          : props.description}
      </p>
      <div className="flex gap-2 items-center mt-4 md:mt-4">
        <p className="font-bold text-xl text-primary-500">
          ${props.priceWithDiscount.toFixed(2)}
        </p>
        {!!props.discount && (
          <p className="text-text-300 line-through decoration-text-300 text-sm md:text-base">
            ${props.price.toFixed(2)}
          </p>
        )}
      </div>
      <Link
        href={`/product/${props.id}`}
        className="mt-4 md:mt-6 flex justify-end gap-1 text-sm md:text-base text-primary-500"
      >
        View product
        <SvgLongArrowRed20 />
      </Link>
    </div>
  );
};

export default SavedProductCard;
