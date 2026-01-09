import z from 'zod'
import { signInValidation } from './sign-in-validation'

export const signUpValidation = signInValidation.merge(
  z.object({
    name: z.string({ error: 'Name required' }).min(1, 'Name required')
  })
)

export type SignUpValidation = z.infer<typeof signUpValidation>
