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
            <SvgMiniPetMobile className="inline md:hidden" />
            <SvgMiniPetDesktop className="hidden md:inline" />
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
              What time can I drop off and pick up my dog?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              What time can I drop off and pick up my dog?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>
              What time can I drop off and pick up my dog?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              What time can I drop off and pick
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="hidden md:block md:col-span-1"></div>
      <div className="flex justify-center pt-6 md:pt-0 md:col-span-5">
        <Image
          src={'/static/kity-hurt.png'}
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
