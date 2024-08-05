import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import useAddCommentMutation from './add-comment-mutation';

const addCommentValidation = z.object({ comment: z.string().min(1) });
type AddCommentValidationType = z.infer<typeof addCommentValidation>;

const AddCommentForm = () => {
  const { mutate, isPending } = useAddCommentMutation();

  const { control, handleSubmit } = useForm<AddCommentValidationType>({
    resolver: zodResolver(addCommentValidation),
  });

  function submitHandler(values: AddCommentValidationType) {
    mutate({ comment: values.comment });
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full p-4 pb-6">
      <p className="text-sm md:text-base">comment text *</p>
      <Controller
        control={control}
        name="comment"
        render={({ field, fieldState }) => (
          <>
            <Textarea {...field} className="mt-3 h-[129px] md:h-[145px]" />
            <p className="text-sm text-error-500 mt-1">
              {fieldState.error?.message}
            </p>
          </>
        )}
      />
      <Button
        isLoading={isPending}
        disabled={isPending}
        variant={isPending ? 'disabled' : 'default'}
        className="w-full mt-6 text-sm md:text-base rounded-lg md:rounded-lg"
      >
        Confirmation
      </Button>
      <p className="mt-6 text-center text-sm md:text-base">
        Your comment will be registered after admin review.
      </p>
    </form>
  );
};

export default AddCommentForm;
