import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import SvgCheckmarkCircle from '@icons/checkmark-circle-10.svg';
import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

import { passwordRegex } from '../signup/pages/signup/signup.validation';
import useResetPasswordMutation from './reset-password.mutation';
import {
  ResetPasswordValidationType,
  resetPasswordValidation,
} from './reset-password.validation';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const params = useSearchParams();
  const uid = params.get('uid');
  const token = params.get('token');

  const { mutate, isPending } = useResetPasswordMutation();

  const { control, handleSubmit, formState, watch } =
    useForm<ResetPasswordValidationType>({
      resolver: zodResolver(resetPasswordValidation),
    });

  const submitHandler = (values: ResetPasswordValidationType) => {
    if (token && uid) mutate({ new_password: values.password, token, uid });
  };

  const passwordWatch = watch('password');
  const passwordTest = passwordRegex.test(passwordWatch);
  const isFormValid = formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col mt-6 md:mt-8"
    >
      <label className="text-sm md:text-base mt-4">New password</label>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <div className="flex items-center bg-nature-600 rounded-lg mt-2 md:mt-3 pr-3">
              <Input
                type={showPassword ? 'text' : 'password'}
                {...field}
                className="flex-1"
              />
              <Icon
                onMouseOver={() => {
                  setShowPassword(true);
                }}
                onMouseLeave={() => {
                  setShowPassword(false);
                }}
              >
                <SvgEye className="md:hidden w-6 h-6" />
                <SvgEyeDesktop className="hidden md:block" />
              </Icon>
            </div>
            <p className="text-error-400 mt-2 text-xs">
              {fieldState.error?.message}
            </p>
          </>
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
          className={passwordWatch && passwordTest ? 'stroke-success-500' : ''}
        >
          <SvgCheckmarkCircle />
        </Icon>
        Letters and numbers
      </div>
      <Button
        variant={isFormValid === false || isPending ? 'disabled' : 'default'}
        disabled={!isFormValid || isPending}
        isLoading={isPending}
        className="font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8"
      >
        Reset password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
