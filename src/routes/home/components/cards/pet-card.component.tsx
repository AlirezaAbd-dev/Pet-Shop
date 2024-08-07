import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import { Pet } from '../..';

type Props = {
  pet: Pet;
  totalLength: number;
  index: number;
};

const PetCard = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 md:gap-6',
        props.totalLength - 1 === props.index && props.totalLength % 2 !== 0
          ? 'col-span-2'
          : '',
      )}
    >
      <div className="rectangle flex items-end w-[111px] h-[107px] md:w-[158px] md:h-[153px] bg-nature-700">
        <img
          src={props.pet.image}
          alt={props.pet.species}
          className="h-[137px] md:h-[188px] w-auto"
        />
      </div>
      <p className="text-sm md:text-xl font-bold">{props.pet.species}</p>
    </div>
  );
};

export default PetCard;
