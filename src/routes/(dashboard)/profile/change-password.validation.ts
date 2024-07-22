import { z } from 'zod';

import { passwordValidation } from '@/routes/(registeration)/signup/pages/signup/signup.validation';

export const changePasswordValidation = z.object({
  oldPassword: z.string().min(8),
  newPassword: passwordValidation,
});

export type ChangePasswordValidationType = z.infer<
  typeof changePasswordValidation
>;
