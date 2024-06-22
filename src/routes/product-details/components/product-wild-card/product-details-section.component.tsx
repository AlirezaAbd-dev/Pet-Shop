'use client';

import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

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

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeartSmall from '@icons/heart-small.svg';

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

const ProductDetailsSection = () => {
  const [selectedWeight, setSelectedWeight] = useState<WeightType>(
    WEIGHTS[0].weight,
  );

  return (
    <section className="flex flex-col mt-6 md:mt-0 md:w-full md:col-span-6">
      <h1 className="font-nunito font-black text-lg md:text-[32px] md:leading-9">
        Royal Canin Urinary
      </h1>
      <p className="text-sm mt-1 md:mt-3 md:text-lg">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing elit
      </p>
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
          <p className="text-xl md:text-[32px] font-bold">$54.12</p>
          <p className="text-text-300 line-through decoration-text-300 md:text-xl">
            $89.12
          </p>
        </div>
        <Icon className="p-1.5 md:p-[10px] bg-nature-700 rounded-lg">
          <SvgHeartSmall className="md:hidden" />
          <SvgHeartDesktop className="hidden md:block" />
        </Icon>
      </div>

      <div className="flex gap-4 mt-6 md:mt-10">
        {/* cart counter */}
        <div className="flex gap-4 md:gap-6 justify-between items-center p-2 py-[10px] px-3 border border-nature-900 rounded-lg md:rounded-2xl">
          <span className="flex justify-center items-center w-7 h-7 md:w-11 md:h-11 bg-nature-700 rounded-[4px] md:rounded-lg">
            <Minus className="w-5 text-nature-900" />
          </span>
          <p className="text-xl md:text-[32px]">1</p>
          <span className="flex justify-center items-center w-7 h-7 md:w-11 md:h-11 bg-nature-700 rounded-[4px] md:rounded-lg">
            <Plus className="w-5 h-5 text-text-400" />
          </span>
        </div>

        <Button className="font-bold text-sm w-full rounded-lg md:h-16 md:rounded-2xl shadow-color-md">
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
