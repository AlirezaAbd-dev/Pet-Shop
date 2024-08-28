import Image from 'next/image';
import React from 'react';

import SvgMiniPetDesktop from '@/assets/svg/mini-pet-desktop.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import Icon from '@/components/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HomeFAQ = () => {
  return (
    <section className="mt-16 md:px-20 md:grid md:grid-cols-12 md:mt-24">
      <div className="md:pt-11 md:col-span-6">
        <p className="px-7 font-black font-nunito text-xl md:text-4xl text-center md:text-left">
          the best product for{' '}
          <Icon>
            <SvgMiniPetMobile className="inline md:hidden -mt-3" />
            <SvgMiniPetDesktop className="hidden md:inline -mt-4" />
          </Icon>{' '}
          your <br />
          furry freinds
        </p>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-3 w-full px-5 mt-5 md:mt-6"
        >
          <AccordionItem value="1">
            <AccordionTrigger>
              What types of products do you offer for pets?
            </AccordionTrigger>
            <AccordionContent>
              We offer a wide variety of pet products, ranging from high-quality
              pet foods and treats to toys, grooming supplies, bedding, and
              accessories. Whether you’re looking for nutritious meals, fun
              toys, or essential care items, we have everything your pet needs
              under one roof.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              Do you offer discounts for bulk purchases?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we provide discounts for bulk purchases! If you&apos;re
              buying in large quantities, please ask our staff about current
              bulk pricing and discounts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>
              Can I order products online and pick them up in-store?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! You can order any product online and choose the
              in-store pickup option at checkout. We’ll have your items ready
              for pickup within two hours during regular business hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              What brands of pet food do you carry?
            </AccordionTrigger>
            <AccordionContent>
              We carry a wide range of high-quality pet food brands, including
              Royal Canin, Hill&apos;s Science Diet, Blue Buffalo, and more. If
              you’re looking for a specific brand, feel free to ask, and we’ll
              help you find it.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="hidden md:block md:col-span-1"></div>
      <div className="flex justify-center pt-6 md:pt-0 md:col-span-5">
        <Image
          src={'/static/kity-hurt.webp'}
          alt="kity-hurt"
          width={598}
          height={547}
          className="w-[254px] h-[233px] md:min-w-[598px] md:h-[547px]"
        />
      </div>
    </section>
  );
};

export default HomeFAQ;
