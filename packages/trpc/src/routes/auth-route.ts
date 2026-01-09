import { publicProcedure, router } from '@/trpc.js'
import { delay } from '@repo/utils/client-utils.js'
import { signInValidation } from '@repo/validations/sign-in-validation.js'
import { signUpValidation } from '@repo/validations/sign-up-validation.js'

export const authRouter = router({
  signUp: publicProcedure.input(signUpValidation).mutation(({ input }) => {
    console.log(input)

    return input
  }),

  signIn: publicProcedure
    .input(signInValidation)
    .mutation(async ({ input }) => {
      console.log(input)

      await delay(5000)
      return input
    })
})
