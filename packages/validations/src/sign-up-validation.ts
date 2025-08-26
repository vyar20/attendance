import z from "zod";
import { signInValidation } from "./sign-in-validation";

export const signUpValidation = signInValidation.extend({
    name: z.string('Name is required').min(1, 'Name is required')
})

export type SignUpValidation = z.infer<typeof signUpValidation>;