'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import useContactUsMutation from './contact-us.mutation';

const contactUsValidation = z.object({
  fullname: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});
type ContactUsValidationType = z.infer<typeof contactUsValidation>;

const ContactUsForm = () => {
  const { mutate, isPending } = useContactUsMutation();

  const { control, handleSubmit } = useForm<ContactUsValidationType>({
    resolver: zodResolver(contactUsValidation),
  });

  function submitHandler(values: ContactUsValidationType) {
    mutate({
      email: values.email,
      full_name: values.fullname,
      message: values.message,
    });
  }

  return (
    <main className="flex flex-col md:grid md:grid-cols-12 mt-8 md:mt-20 px-5 md:px-20 gap-8">
      <section className="md:col-span-5">
        <h1 className="text-xl md:text-[32px] font-bold font-nunito">
          Contact us
        </h1>
        <p className="text-sm md:text-base md:mt-2 mt-1 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <form onSubmit={handleSubmit(submitHandler)} className="mt-6 md:mt-8">
          <div>
            <p className="text-sm md:text-base">Full name*</p>
            <Controller
              control={control}
              name="fullname"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  errorText={fieldState.error?.message}
                  className="mt-3"
                />
              )}
            />
          </div>
          <div className="mt-5 md:mt-6">
            <p className="text-sm md:text-base">Email*</p>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  errorText={fieldState.error?.message}
                  className="mt-3"
                />
              )}
            />
          </div>
          <div className="mt-5 md:mt-6">
            <p className="text-sm md:text-base">Message*</p>
            <Controller
              control={control}
              name="message"
              render={({ field, fieldState }) => (
                <>
                  <Textarea {...field} className="mt-3 h-[99px]" />
                  <p className="mt-1 text-sm text-error-500">
                    {fieldState.error?.message}
                  </p>
                </>
              )}
            />
          </div>
          <Button
            isLoading={isPending}
            disabled={isPending}
            variant={isPending ? 'disabled' : 'default'}
            className="w-full md:w-[169px] md:text-base mt-5 md:mt-6 rounded-lg font-bold"
          >
            Submit
          </Button>
        </form>
      </section>
      <div className="hidden md:block col-span-2"></div>
      <div className="md:col-span-5 md:flex md:items-center md:justify-end">
        <img
          src="/static/contact-us-map.png"
          alt="location"
          className="w-full"
        />
      </div>
    </main>
  );
};

export default ContactUsForm;
