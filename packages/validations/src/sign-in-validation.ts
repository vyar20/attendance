import z from "zod";

export const signInValidation = z.object({
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: z.string('Password is required').regex(/(?=.*[A-Za-z\d])(?=.*[^A-Za-z\d]).{12,}/, 'Password must be at least 12 characters long and contain at least one letter and one number or special character')
})

export type SignInValidation = z.infer<typeof signInValidation>;