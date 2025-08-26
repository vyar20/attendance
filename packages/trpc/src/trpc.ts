import { initTRPC, TRPCError } from '@trpc/server';
import { createTRPCContext } from './context';
export * as trpcExpress from "@trpc/server/adapters/express";
 
export const t = initTRPC.context<typeof createTRPCContext>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.middleware(({ ctx, next }) => {
    if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' })
    
    return next()
})