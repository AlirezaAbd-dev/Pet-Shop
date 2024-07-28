'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useLoginMutation from '@/routes/(registeration)/login/login.mutation';
import {
  LoginValidationType,
  loginValidation,
} from '@/routes/(registeration)/login/login.validation';

const AdminLoginForm = () => {
  const { mutate, isPending } = useLoginMutation({ isPanel: true });

  const { control, handleSubmit } = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
  });

  function submitHandler(values: LoginValidationType) {
    mutate({ email: values.username, password: values.password });
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full mt-12">
      <p className="text-sm md:text-base">Username</p>
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            errorText={fieldState.error?.message}
            className="mt-3"
          />
        )}
      />

      <p className="text-sm md:text-base mt-4">Password</p>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            errorText={fieldState.error?.message}
            className="mt-3"
          />
        )}
      />

      <Button
        isLoading={isPending}
        disabled={isPending}
        variant={isPending ? 'disabled' : 'default'}
        className="mt-9 w-full rounded-xl md:font-bold md:text-base"
      >
        Register
      </Button>
    </form>
  );
};

export default AdminLoginForm;
