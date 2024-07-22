'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';
import { passwordRegex } from '@/routes/(registeration)/signup/pages/signup/signup.validation';

import SvgCheckmarkCircle from '@icons/checkmark-circle-10.svg';

import {
  ChangePasswordValidationType,
  changePasswordValidation,
} from '../../change-password.validation';
import useEditPasswordMutation from '../../edit-password.mutation';

const ChangePasswordModal = () => {
  const isModalOpen = useDashboardModalsStore(
    (s) => s.isChangePasswordModalOpen,
  );
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsChangePasswordModalOpen,
  );

  const { mutate, isPending } = useEditPasswordMutation();

  const { control, handleSubmit, formState, watch } =
    useForm<ChangePasswordValidationType>({
      resolver: zodResolver(changePasswordValidation),
    });

  function submitHandler(values: ChangePasswordValidationType) {
    mutate({
      old_password: values.oldPassword,
      new_password: values.newPassword,
    });
  }

  const passwordWatch = watch('newPassword');
  const passwordTest = passwordRegex.test(passwordWatch);
  const isFormValid = formState.isValid;

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        aria-describedby="change password"
        className="w-[90%] md:max-w-[458px] bg-white flex flex-col items-center p-0"
      >
        <div className="w-full flex justify-between items-center bg-nature-800 p-4 rounded-t-2xl">
          <p className="font-nunito font-bold">Edit password</p>
          <X
            className="text-secondary-300 w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full px-3 md:px-4 py-4"
        >
          <p className="text-sm md:text-base">Current password*</p>
          <Controller
            control={control}
            name="oldPassword"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />

          <p className="text-sm md:text-base mt-5 md:mt-6">New password*</p>
          <Controller
            control={control}
            name="newPassword"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />

          <div
            className={cn(
              'flex items-center gap-2 mt-3 md:mt-4',
              passwordWatch?.length >= 8 ? 'text-success-500' : '',
            )}
          >
            <Icon
              className={passwordWatch?.length >= 8 ? 'stroke-success-500' : ''}
            >
              <SvgCheckmarkCircle />
            </Icon>
            At least 8 characters
          </div>
          <div
            className={cn(
              'flex items-center gap-2 mt-2 md:mt-3',
              passwordWatch && passwordTest ? 'text-success-500' : '',
            )}
          >
            <Icon
              className={
                passwordWatch && passwordTest ? 'stroke-success-500' : ''
              }
            >
              <SvgCheckmarkCircle />
            </Icon>
            Letters and numbers
          </div>

          <Button
            variant={
              isFormValid === false || isPending ? 'disabled' : 'default'
            }
            disabled={!isFormValid || isPending}
            isLoading={isPending}
            className="mt-6 w-full rounded-lg text-sm font-bold md:h-11 md:text-base"
          >
            Confirmation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
