import { X } from 'lucide-react';

import SvgEdit32 from '@/assets/svg/Pen, Edit-orange-32.svg';
import SvgDeleteRed32 from '@/assets/svg/Trash, Delete, Bin-red32.svg';
import { cn } from '@/lib/utils';
import { Pet } from '@/routes/home';

import { useAdminPetsStore } from './admin-pets.store';

type Props = {
  pet: Pet;
};

const AdminPetCard = (props: Props) => {
  const setIsDeletecategorymodalOpen = useAdminPetsStore(
    (s) => s.setIsDeletePetModalOpen,
  );
  const petEditMode = useAdminPetsStore((s) => s.petEditMode);
  const setPetEditMode = useAdminPetsStore((s) => s.setPetEditMode);

  const isEditMode = petEditMode?.id === props.pet.id;

  return (
    <li key={props.pet.id} className="group">
      <div className="rectangle w-[158px] h-[153px] bg-nature-700 flex items-center justify-center">
        <img src={props.pet.image} className="h-[110px]" />
      </div>
      <p className="mt-6 font-bold text-xl text-center">{props.pet.species}</p>
      <div
        className={cn(
          'flex justify-center gap-4 mt-4 group-hover:opacity-100',
          isEditMode ? 'opacity-1000' : 'opacity-0',
        )}
      >
        <SvgDeleteRed32
          className="cursor-pointer"
          onClick={() => {
            setIsDeletecategorymodalOpen(String(props.pet.id));
          }}
        />
        {isEditMode ? (
          <X
            className="w-8 h-8 text-error-500 cursor-pointer"
            onClick={() => {
              setPetEditMode(undefined);
            }}
          />
        ) : (
          <SvgEdit32
            className="cursor-pointer"
            onClick={() => {
              setPetEditMode(props.pet);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default AdminPetCard;
