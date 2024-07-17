import { z } from 'zod';

export const checkoutValidation = z.object({
  country: z.string().min(1),
  county: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  postCode: z.string().min(1),
  phone: z.string().min(1),
  notes: z.string().optional(),
});

export type CheckoutValidationType = z.infer<typeof checkoutValidation>;
