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
  ingredients: z.string().optional(),
  shipping: z.string().optional(),
  features: z.string().optional(),
  isBestSelling: z.string(),
  isTop: z.string(),
  isOnSale: z.string(),
});

export type AddProductValidationType = z.infer<typeof addProductValidation>;
