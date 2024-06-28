import Image from 'next/image';
import React from 'react';

import Icon from '@/components/icon';

import SvgCalendarDates from '@icons/calendar-dates.svg';

type TipCardProps = {
  image: string;
};

const TipsCard = (props: TipCardProps) => {
  return (
    <div className="flex flex-col items-start rounded-2xl md:rounded-3xl border border-nature-800 p-4">
      <img
        src={`/static/${props.image}`}
        alt="tip-cat"
        className="w-full md:rounded-2xl h-[180px] object-center"
      />
      <span className="flex gap-1 mt-3 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px] md:font-semibold">
        <Icon>
          <SvgCalendarDates className="w-5 h-5" />
        </Icon>
        Dec 20, 2021
      </span>
      <p className="font-nunito font-bold md:text-xl mt-4">
        Family reunited with stolen cats after online appeal
      </p>
      <p className="text-sm md:text-base mt-3">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing elit
      </p>
    </div>
  );
};

export default TipsCard;
