'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import SvgCheckmarkCircle from '@icons/checkmark-circle-10.svg';
import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

import useSignupMutation from './signup-mutation.hook';
import {
  SignupValidationType,
  passwordRegex,
  signupValidation,
} from './signup.validation';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useSignupMutation();

  const { control, handleSubmit, watch, formState } =
    useForm<SignupValidationType>({
      resolver: zodResolver(signupValidation),
    });

  const submitHandler = (values: SignupValidationType) => {
    mutate(values);
  };

  const termsWatch = watch('terms');
  const passwordWatch = watch('password');
  const passwordTest = passwordRegex.test(passwordWatch);
  const isFormValid = formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col mt-6 md:mt-8"
    >
      <label className="text-sm md:text-base">Full name</label>
      <Controller
        control={control}
        name="fullname"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            className="mt-2 md:mt-3"
            errorText={fieldState.error?.message}
          />
        )}
      />
      <label className="text-sm md:text-base mt-4">Email</label>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            className="mt-2 md:mt-3"
            errorText={fieldState.error?.message}
          />
        )}
      />
      <label className="text-sm md:text-base mt-4 ">Password</label>
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
      <div className="flex items-center w-full gap-2 mt-6">
        <Controller
          control={control}
          name="terms"
          render={({ field }) => (
            <Checkbox
              onCheckedChange={(checked) => {
                field.onChange(checked);
              }}
              id="terms"
            />
          )}
        />
        <label
          htmlFor="terms"
          className="text-xs md:text-base font-nunito  cursor-pointer"
        >
          I agree to the{' '}
          <span className="underline decoration-text-100">
            Terms of Service{' '}
          </span>
          and the{' '}
          <span className="underline decoration-text-100">Privacy Policy.</span>
        </label>
      </div>

      <Button
        variant={
          !isFormValid || !termsWatch || isPending ? 'disabled' : 'default'
        }
        disabled={!isFormValid || !termsWatch || isPending}
        isLoading={isPending}
        className="mt-6 md:mt-8 font-bold text-sm shadow-color-md md:text-base"
      >
        Rigester
      </Button>
    </form>
  );
};

export default SignupForm;
