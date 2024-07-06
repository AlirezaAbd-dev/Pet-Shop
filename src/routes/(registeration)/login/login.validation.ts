import { z } from 'zod';

import { passwordValidation } from '../signup/pages/signup/signup.validation';

export const emailValidation = z.string().email();

export const loginValidation = z.object({
  username: z.string(),
  password: z.string().min(8),
});
export type LoginValidationType = z.infer<typeof loginValidation>;
