import { publicProcedure, router } from '@/trpc.js'
import { authRouter } from './auth-route.js'

export const appRouter = router({
  hello: publicProcedure.query(() => 'Hello World'),
  protectedHello: publicProcedure.query(() => 'Hello World'),
  auth: authRouter
})

export type AppRouter = typeof appRouter
