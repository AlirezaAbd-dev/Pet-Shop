import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useRegisterStore } from '../_store/register.store';
import useForgotPasswordMutation from './forgot-password.mutation';
import {
  ForgotPasswordValidationType,
  forgotPasswordValidation,
} from './forgot-password.validation';

const ForgotPasswordForm = () => {
  const setEmail = useRegisterStore((s) => s.setSignupEmail);
  const { mutate, isPending } = useForgotPasswordMutation();

  const { control, handleSubmit, formState } =
    useForm<ForgotPasswordValidationType>({
      resolver: zodResolver(forgotPasswordValidation),
    });

  const submitHandler = (values: ForgotPasswordValidationType) => {
    setEmail(values.email);
    mutate(values);
  };

  const isFormValid = formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col mt-6 md:mt-8"
    >
      <label className="text-sm md:text-base">Email address</label>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            errorText={fieldState.error?.message}
            className="mt-2 md:mt-3"
          />
        )}
      />
      <Button
        isLoading={isPending}
        disabled={isPending || !isFormValid}
        variant={isPending || !isFormValid ? 'disabled' : 'default'}
        className="font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8"
      >
        Send email
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
