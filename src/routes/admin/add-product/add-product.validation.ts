import { z } from 'zod';

export const addProductValidation = z.object({
  name: z.string().min(1),
  description: z.string(),
  brand: z.string().min(1),
  price: z.coerce.number(),
  weight: z.coerce.number(),
  inventory: z.coerce.number(),
  pets: z.array(z.number()).min(1),
  categories: z.array(z.number()).min(1),
  discount: z.coerce.number().optional(),
});

export type AddProductValidationType = z.infer<typeof addProductValidation>;
