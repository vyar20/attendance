import z from 'zod'

export const signInValidation = z.object({
  email: z.email({ error: 'Invalid email format' }),
  password: z
    .string({ error: 'Password required' })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[^A-Za-z\d]).{12,}$/, {
      error:
        'Password should have at least 12 Chars, 1 Lowercase, 1 Uppercase, 1 Number and 1 Symbol'
    })
})

export type SignInValidation = z.infer<typeof signInValidation>
