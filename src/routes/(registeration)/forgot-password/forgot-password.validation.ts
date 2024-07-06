import { z } from 'zod';

export const forgotPasswordValidation = z.object({
  email: z.string().email(),
});

export type ForgotPasswordValidationType = z.infer<
  typeof forgotPasswordValidation
>;
