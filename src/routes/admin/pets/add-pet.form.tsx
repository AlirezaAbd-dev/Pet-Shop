import { FormEventHandler, useEffect, useState } from 'react';
import { toast } from 'sonner';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useAdminPetsStore } from './admin-pets.store';
import useAdminAddPetMutation from './queries/admin-add-pet.mutation';
import useAdminEditPetMutation from './queries/admin-edit-pet.mutation';

const AddPetForm = () => {
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState<File>();

  const { mutateAsync: addPet, isPending: addPetPending } =
    useAdminAddPetMutation();
  const { mutateAsync: editPet, isPending: editPetPending } =
    useAdminEditPetMutation();

  const petEditMode = useAdminPetsStore((s) => s.petEditMode);
  const setPetEditMode = useAdminPetsStore((s) => s.setPetEditMode);

  useEffect(() => {
    setPetName(petEditMode?.species || '');
    setPetImage(undefined);
  }, [petEditMode]);

  async function submitHandler(e: any) {
    e.preventDefault();

    if (!petEditMode) {
      if (!petImage || !petName) {
        return toast.error('Please fill the fields');
      }
      const formData = new FormData();

      formData.append('species', petName);
      formData.append('image', petImage);

      await addPet(formData);
    } else {
      if (!petName) {
        return toast.error('Please fill the fields');
      }
      const formData = new FormData();

      formData.append('species', petName);
      if (petImage) formData.append('image', petImage);

      await editPet({ pet: formData, id: petEditMode.id });
      setPetEditMode(undefined);
    }

    setPetImage(undefined);
    setPetName('');
  }

  return (
    <form className="mt-6" onSubmit={submitHandler}>
      <div className="flex gap-6">
        <div className="w-full">
          <p>Name Pet</p>
          <Input
            className="mt-4"
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <p className="text-text-300">Upload image</p>
          <label htmlFor="pet-image-input">
            <div className="mt-4 cursor-pointer flex items-center bg-nature-600 h-12 px-3 rounded-lg text-[#A0A0A1]">
              Upload file
            </div>
            <Input
              id="pet-image-input"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target?.files?.[0]) setPetImage(e.target.files[0]);
              }}
            />
          </label>
          {(petImage || petEditMode?.image) && (
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold text-lg">
                {petImage?.name || petEditMode?.image}
              </p>
              <Icon className="flex gap-3 items-center">
                <SvgEye32
                  onClick={() => {
                    if (petImage) {
                      const url = URL.createObjectURL(petImage);
                      window.open(url);

                      URL.revokeObjectURL(url);
                    }
                    if (petEditMode?.image) {
                      window.open(petEditMode.image);
                    }
                  }}
                />
                {petImage && (
                  <SvgDelete32
                    onClick={() => {
                      setPetImage(undefined);
                    }}
                  />
                )}
              </Icon>
            </div>
          )}
        </div>
      </div>
      <Button
        variant={addPetPending || editPetPending ? 'disabled' : 'confirm'}
        disabled={addPetPending || editPetPending}
        isLoading={addPetPending || editPetPending}
        className="mt-4 w-[142px] rounded-lg md:text-sm h-11"
      >
        Confirmation
      </Button>
    </form>
  );
};

export default AddPetForm;
