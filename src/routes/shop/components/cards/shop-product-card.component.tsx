import Link from 'next/link';

import { Product } from '@/app/(core)/product/[productId]/page';
import SvgPolygon56 from '@/assets/svg/polygon-56.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

import SvgWeightDesktop from '@icons/weight-desktop.svg';
import SvgWeight from '@icons/weight-extra-small.svg';

type ShopProductCardProps = Product;

const ShopProductCard = (props: ShopProductCardProps) => {
  return (
    <Link
      href={`/product/${props.id}`}
      className="flex md:flex-col gap-4 md:gap-0 border border-nature-800 rounded-2xl p-3 md:p-4"
    >
      <div className="relative flex justify-center items-start md:items-center h-auto md:h-[152px] bg-inherit md:bg-nature-600 rounded-xl">
        <Icon
          className={cn(
            'absolute -top-[20px] -left-[28px] hidden md:block',
            props.total_discount === 0 ? 'md:hidden' : '',
          )}
        >
          <SvgPolygon56 />
          <p
            className={cn(
              'absolute  font-nunito font-black text-sm text-white',
              props.total_discount > 0 && props.total_discount < 10
                ? 'top-[32px] left-[34px]'
                : '',
              props.total_discount > 9 && props.total_discount < 100
                ? 'top-[32px] left-[30px]'
                : '',
              props.total_discount === 100 ? 'top-[32px] left-[25px]' : '',
            )}
          >
            {props.total_discount}%
          </p>
        </Icon>

        <img
          src={props.image_urls[0]}
          alt="product-1"
          className="md:h-[132px] w-[78px] md:w-auto"
        />
      </div>
      <div className="w-full">
        <div className="mt-0 md:mt-4 flex justify-between items-start">
          <p className="font-bold font-nunito text-sm md:text-xl">
            {props.name.length > 14
              ? props.name.slice(0, 14) + '...'
              : props.name}
          </p>
          <Icon className="flex md:items-center gap-1 text-xs md:text-base md:font-bold">
            <SvgWeight className="md:hidden w-5 h-5" />
            <SvgWeightDesktop className="hidden md:block" />
            {props.weight}KG
          </Icon>
        </div>
        <p className="text-xs md:text-base mt-2 md:mt-3">
          {props.description.length > 30
            ? props.description.slice(0, 30) + '...'
            : props.description}
        </p>

        <div className="flex gap-2 items-center mt-3 md:mt-4">
          <p className="font-bold text-sm md:text-xl text-primary-500">
            ${props.price_after_promotion.toFixed(2)}
          </p>
          {props.total_discount > 0 && (
            <p className="text-text-300 line-through decoration-text-300 text-xs md:text-base">
              ${props.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ShopProductCard;
