import { z } from 'zod';

import { passwordValidation } from '../signup/pages/signup/signup.validation';

export const resetPasswordValidation = z.object({
  password: passwordValidation,
});

export type ResetPasswordValidationType = z.infer<
  typeof resetPasswordValidation
>;
