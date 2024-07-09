'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import SvgWeightDesktopActive from '@/assets/svg/weight-active-desktop.svg';
import SvgWeightDesktop from '@/assets/svg/weight-desktop.svg';
import SvgWeightSmallActive from '@/assets/svg/weight-small-active.svg';
import SvgWeightSmall from '@/assets/svg/weight-small.svg';
import Icon from '@/components/icon';
import {
  Accordion1,
  AccordionContent1,
  AccordionItem1,
  AccordionTrigger1,
} from '@/components/ui/accordion-1';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeartSmall from '@icons/heart-small.svg';

import Counter from './counter.component';
import { ProductWildCardProps } from './product-wild-card.component';

// temporarly
const WEIGHTS = [
  {
    weight: '250',
  },
  {
    weight: '500',
  },
  {
    weight: '750',
  },
] as const;
type WeightType = (typeof WEIGHTS)[number]['weight'];

type ProductDetailsSectionProps = ProductWildCardProps;

const ProductDetailsSection = (props: ProductDetailsSectionProps) => {
  const [selectedWeight, setSelectedWeight] = useState<WeightType>(
    WEIGHTS[0].weight,
  );

  const cart = useCartStore((s) => s.cart);
  const onChangeCart = useCartStore((s) => s.onChangeCart);
  console.log(cart);
  const currentCount =
    cart.find((c) => c.id === props.id && c.weight === selectedWeight)?.count ||
    0;

  const [counterValue, setCounterValue] = useState(currentCount);

  useEffect(() => {
    setCounterValue(currentCount);
  }, [selectedWeight, cart]);

  function addToCart() {
    onChangeCart({
      image: '/examples/single-product-image-1.png',
      count: counterValue,
      weight: selectedWeight,
      id: props.id,
      price: props.price,
      priceWithDiscount: props.priceWithDiscount,
      title: props.title,
    });
    toast.success(`${props.title} successfully added to cart`);
  }

  return (
    <section className="flex flex-col mt-6 md:mt-0 md:w-full md:col-span-6">
      <h1 className="font-nunito font-black text-lg md:text-[32px] md:leading-9">
        {props.title}
      </h1>
      <p className="text-sm mt-1 md:mt-3 md:text-lg">{props.description}</p>
      <p className="mt-4 md:mt-9 font-nunito font-bold text-sm md:text-lg">
        Select weight
      </p>
      <ul className="flex gap-3 md:gap-4 mt-3 overflow-x-auto no-scrollbar">
        {WEIGHTS.map((item) => (
          <li
            key={item.weight}
            onClick={() => setSelectedWeight(item.weight)}
            className={cn(
              'flex items-center gap-2 text-sm md:text-base border border-nature-900 rounded-xl px-4 py-3 cursor-pointer',
              selectedWeight === item.weight
                ? 'bg-primary-50 bg-opacity-5 font-semibold text-primary-500 border-primary-500'
                : '',
            )}
          >
            <Icon>
              {selectedWeight === item.weight ? (
                <>
                  <SvgWeightSmallActive className="md:hidden" />
                  <SvgWeightDesktopActive className="hidden md:block" />
                </>
              ) : (
                <>
                  <SvgWeightSmall className="md:hidden" />
                  <SvgWeightDesktop className="hidden md:block" />
                </>
              )}
            </Icon>
            {item.weight}KG
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6 md:mt-8">
        <div className="flex items-center gap-3">
          <p className="text-xl md:text-[32px] font-bold">
            ${props.priceWithDiscount.toFixed(2)}
          </p>
          {props.price > props.priceWithDiscount && (
            <p className="text-text-300 line-through decoration-text-300 md:text-xl">
              ${props.price.toFixed(2)}
            </p>
          )}
        </div>
        <Icon className="p-1.5 md:p-[10px] bg-nature-700 rounded-lg">
          <SvgHeartSmall className="md:hidden" />
          <SvgHeartDesktop className="hidden md:block" />
        </Icon>
      </div>

      <div className="flex gap-4 mt-6 md:mt-10">
        {/* cart counter */}
        <Counter value={counterValue} onChange={setCounterValue} maximum={10} />

        <Button
          onClick={addToCart}
          disabled={counterValue === 0}
          variant={counterValue === 0 ? 'disabled' : 'default'}
          className="font-bold text-sm w-full rounded-lg md:h-16 md:rounded-2xl shadow-color-md"
        >
          Add to cart
        </Button>
      </div>

      <Accordion1 type="single" collapsible className="w-full mt-8 md:mt-3">
        <AccordionItem1 value="details">
          <AccordionTrigger1>Details</AccordionTrigger1>
          <AccordionContent1>
            Lorem ipsum dolor sit amet, consec tetur adipi s Lorem ipsum dolor
            sit amet, consec tetur adipi scing elit. Ut scing elit Lorem ipsum
            dolor sit amet, consec tetur adipi scing elit. Ut scing elitcing
            elit. Ut scing elit
          </AccordionContent1>
        </AccordionItem1>
        <AccordionItem1 value="detaiIngredients & Analysisls">
          <AccordionTrigger1>Ingredients & Analysis</AccordionTrigger1>
          <AccordionContent1>
            Lorem ipsum dolor sit amet, consec tetur adipi s Lorem ipsum dolor
            sit amet, consec tetur adipi scing elit. Ut scing elit Lorem ipsum
            dolor sit amet, consec tetur adipi scing elit. Ut scing elitcing
            elit. Ut scing elit
          </AccordionContent1>
        </AccordionItem1>
        <AccordionItem1 className="border-none" value="Shipping & Returns">
          <AccordionTrigger1>Shipping & Returns</AccordionTrigger1>
          <AccordionContent1>
            Lorem ipsum dolor sit amet, consec tetur adipi s Lorem ipsum dolor
            sit amet, consec tetur adipi scing elit. Ut scing elit Lorem ipsum
            dolor sit amet, consec tetur adipi scing elit. Ut scing elitcing
            elit. Ut scing elit
          </AccordionContent1>
        </AccordionItem1>
      </Accordion1>
    </section>
  );
};

export default ProductDetailsSection;
