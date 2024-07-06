import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useRegisterStore } from '../_store/register.store';
import useEmailVerificationMutation from './email-verification.mutation';
import {
  EmailVerificationValidation,
  emailVerificationValidation,
} from './email-verification.validation';

const EmailVerificationForm = () => {
  const signupEmail = useRegisterStore((s) => s.signupEmail);

  const { mutate, isPending } = useEmailVerificationMutation();

  const { control, handleSubmit, formState } =
    useForm<EmailVerificationValidation>({
      resolver: zodResolver(emailVerificationValidation),
    });

  const isFormValid = formState.isValid;

  const submitHandler = (values: EmailVerificationValidation) => {
    if (values?.code && signupEmail)
      mutate({ code: values.code as string, email: signupEmail });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col mt-6 md:mt-8"
    >
      <label className="text-sm md:text-base">Email verification code</label>
      <Controller
        control={control}
        name="code"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type="number"
            errorText={fieldState.error?.message}
            className="hide-arrows mt-2 md:mt-3"
          />
        )}
      />
      <Button
        isLoading={isPending}
        disabled={isPending || !isFormValid}
        variant={isPending || !isFormValid ? 'disabled' : 'default'}
        className="font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8"
      >
        Confirm
      </Button>
    </form>
  );
};

export default EmailVerificationForm;
