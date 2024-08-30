'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import SvgWeightDesktop from '@/assets/svg/weight-gray-desktop.svg';
import SvgWeightMobile from '@/assets/svg/weight-gray-mobile.svg';
import Icon from '@/components/icon';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { calculatePercent } from '@/lib/utils/calculatePrice';
import Counter from '@/routes/product-details/components/product-wild-card/counter.component';
import useAddProductToCartMutation from '@/routes/product-details/queries/add-product-to-cart.mutation';
import { useAuthStore } from '@/store/auth.store';
import { CartProduct, useCartStore } from '@/store/cart.store';

type ProductCartCardProps = CartProduct;

const ProductCartCard = (props: ProductCartCardProps) => {
  const [counterValue, setCounterValue] = useState(props.count);

  const profile = useAuthStore((s) => s.profile);
  const isProfileLoading = useAuthStore((s) => s.isLoading);
  const onCartChange = useCartStore((s) => s.onChangeCart);

  const { mutateAsync } = useAddProductToCartMutation();

  useEffect(() => {
    onCartChange({ ...props, count: counterValue });
  }, [counterValue]);

  async function onChangeHandler(count: number) {
    setCounterValue(count);
    if (profile) {
      await mutateAsync({ product_id: props.id, quantity: count });
    }
  }

  return (
    <li className="flex justify-between md:items-center border border-nature-900 rounded-2xl p-3 md:p-5">
      <Link href={`/product/${props.id}`} className="flex gap-3 md:gap-4">
        <div className="flex items-center justify-center w-[53px] h-[53px] md:w-20 md:h-20 bg-nature-700 rounded-xl">
          <img
            src={props.image}
            alt="product-1"
            className="w-auto h-[40px] md:h-[64px]"
          />
        </div>
        <div>
          <p className="font-nunito font-bold text-sm md:text-xl">
            {props.title}
          </p>
          <Icon className="flex gap-2 mt-2 text-text-300 text-sm md:text-lg">
            <SvgWeightMobile className="md:hidden" />
            <SvgWeightDesktop className="hidden md:block" />
            {(props.weight * props.count).toFixed(2)}KG
          </Icon>
        </div>
      </Link>
      <div className="flex flex-col md:flex-row-reverse items-end md:items-center md:gap-9">
        <div className="md:flex md:flex-col md:justify-center md:h-full text-right">
          {props.price > props.priceWithDiscount && (
            <div className="md:flex gap-2 text-xs md:text-xl text-text-300">
              <p className="line-through decoration-text-300">
                ${props.price.toFixed(2)}
              </p>
              <span className="hidden md:inline font-semibold px-2 py-1 text-white text-base w-[49px] h-[30px] rounded-[50px] bg-error-500">
                {calculatePercent(props.price, props.priceWithDiscount).toFixed(
                  2,
                )}
                %
              </span>
            </div>
          )}
          <p className="font-bold text-sm md:text-2xl mt-1 md:mt-3">
            $ {props.priceWithDiscount.toFixed(2)}
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          {/* Counter */}
          {isProfileLoading ? (
            <LoadingSpinner className="md:scale-100 scale-50" />
          ) : (
            <Counter
              value={counterValue}
              onChange={onChangeHandler}
              maximum={props.inventory}
              minimum={1}
              onMinimumType="delete"
              size="md"
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductCartCard;
