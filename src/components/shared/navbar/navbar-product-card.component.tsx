import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import SvgWeight from '@/assets/svg/weight-gray-mobile.svg';
import Icon from '@/components/icon';
import LoadingSpinner from '@/components/ui/loading-spinner';
import Counter from '@/routes/product-details/components/product-wild-card/counter.component';
import useAddProductToCartMutation from '@/routes/product-details/queries/add-product-to-cart.mutation';
import { useAuthStore } from '@/store/auth.store';
import { CartProduct, useCartStore } from '@/store/cart.store';

type NavbarProductCardProps = CartProduct;

const NavbarProductCard = (props: NavbarProductCardProps) => {
  const profile = useAuthStore((s) => s.profile);
  const isProfileLoading = useAuthStore((s) => s.isLoading);

  const [counterValue, setCounterValue] = useState(props.count);

  const onChangeCart = useCartStore((s) => s.onChangeCart);

  const { mutateAsync } = useAddProductToCartMutation();

  useEffect(() => {
    onChangeCart({
      ...props,
      count: counterValue,
    });
  }, [counterValue]);

  async function onChangeHandler(count: number) {
    setCounterValue(count);
    if (profile) {
      await mutateAsync({ product_id: props.id, quantity: count });
    }
  }

  return (
    <li className="w-full flex justify-between pb-5 md:pb-6 border-b border-nature-900">
      <Link
        href={`/product/${props.id}`}
        className="w-full flex gap-3 md:gap-4"
      >
        <div className="flex justify-center items-center w-[53px] h-[53px] md:w-[83px] md:h-[83px] bg-nature-700 rounded-xl">
          <img
            src={props.image}
            alt="product-image-1"
            className="w-auto h-[40px] md:h-[64px]"
          />
        </div>
        <div>
          <p className="font-nunito font-bold text-sm md:text-lg">
            {props.title}
          </p>
          <Icon className="flex items-center gap-2 mt-2 text-sm md:text-base text-text-300">
            <SvgWeight />
            {(props.weight * props.count).toFixed(2)}KG
          </Icon>
        </div>
      </Link>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 md:gap-2">
          <p className="font-bold text-sm md:text-lg">
            ${props.priceWithDiscount.toFixed(2)}
          </p>
          {props.price > props.priceWithDiscount && (
            <p className="line-through decoration-text-300 text-text-300 text-xs md:text-base">
              ${props.price.toFixed(2)}
            </p>
          )}
        </div>
        {/* counter */}
        {isProfileLoading ? (
          <LoadingSpinner className="md:scale-100 scale-50" />
        ) : (
          <Counter
            value={counterValue}
            onChange={onChangeHandler}
            minimum={1}
            onMinimumType="delete"
            maximum={props.inventory}
            size="sm"
          />
        )}
      </div>
    </li>
  );
};

export default NavbarProductCard;
