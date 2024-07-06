import { z } from 'zod';

export const emailVerificationValidation = z.object({
  code: z.custom(
    (data) => {
      if (typeof data === 'string' && data.length === 5) {
        return true;
      } else {
        return false;
      }
    },
    { message: 'Enter the code that sent to your email' },
  ),
});

export type EmailVerificationValidation = z.infer<
  typeof emailVerificationValidation
>;
