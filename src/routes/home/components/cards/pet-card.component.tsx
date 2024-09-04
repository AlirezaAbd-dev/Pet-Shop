import { useRouter } from 'next/navigation';

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
      onClick={() => {
        router.push(`/shop?pet=${props.pet.id}`);
      }}
      className={cn(
        'flex flex-col items-center gap-3 md:gap-6 cursor-pointer',
        props.totalLength - 1 === props.index && props.totalLength % 2 !== 0
          ? 'col-span-2 md:col-span-1'
          : '',
      )}
    >
      <div className="rectangle flex items-end w-[111px] h-[107px] md:w-[175px] md:h-[170px] bg-nature-700">
        <img
          src={props.pet.image}
          alt={props.pet.species}
          className="h-[137px] md:h-[205px] w-auto"
        />
      </div>
      <p className="text-sm md:text-xl font-bold">{props.pet.species}</p>
    </div>
  );
};

export default PetCard;
