import { User } from '@repo/db/index'
import trpcExpress from '@trpc/server/adapters/express'

export const createTRPCContext = ({ req, res }: trpcExpress.CreateExpressContextOptions): {
    req: trpcExpress.CreateExpressContextOptions['req']
    res: trpcExpress.CreateExpressContextOptions['res'],
    user: User
} => { 
    return {
        req,
        res,
        user: (req as any).user as unknown as User
    }
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>