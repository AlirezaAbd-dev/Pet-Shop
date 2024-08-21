import z from 'zod';

export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

export const passwordValidation = z
  .string()
  .regex(passwordRegex, {
    message: 'Entered password is weak',
  })
  .min(8);

export const signupValidation = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  password: passwordValidation,
  terms: z.boolean(),
});

export type SignupValidationType = z.infer<typeof signupValidation>;
