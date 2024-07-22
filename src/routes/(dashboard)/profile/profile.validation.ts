import { z } from 'zod';

export const profileValidation = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
  country: z.string().min(1),
  county: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  postCode: z.string().min(1),
});

export type ProfileValidationType = z.infer<typeof profileValidation>;
