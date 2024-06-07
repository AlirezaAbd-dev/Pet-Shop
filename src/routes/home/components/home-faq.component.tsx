import Image from 'next/image';
import React from 'react';

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
    <section className="mt-16">
      <p className="px-7 font-black font-nunito text-xl text-center">
        the best product for{' '}
        <Icon>
          <SvgMiniPetMobile className="inline" />
        </Icon>{' '}
        your furry freinds
      </p>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 w-full px-5 mt-5"
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            What time can I drop off and pick up my dog?
          </AccordionTrigger>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>
            What time can I drop off and pick up my dog?
          </AccordionTrigger>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>
            What time can I drop off and pick up my dog?
          </AccordionTrigger>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger>What time can I drop off and pick</AccordionTrigger>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center pt-6">
        <Image
          src={'/static/kity-hurt.png'}
          alt="kity-hurt"
          width={254}
          height={233}
        />
      </div>
    </section>
  );
};

export default HomeFAQ;
