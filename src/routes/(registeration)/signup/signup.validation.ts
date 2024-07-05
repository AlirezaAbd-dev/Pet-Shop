import z from 'zod';

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signupValidation = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .regex(passwordRegex, {
      message: 'Entered password is weak',
    })
    .min(8),
  terms: z.boolean(),
});

export type SignupValidationType = z.infer<typeof signupValidation>;
