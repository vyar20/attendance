import { env } from '@repo/env/env'
import { createContext } from '@repo/trpc/context'
import { appRouter } from '@repo/trpc/routes/_app'
import { createExpressMiddleware } from '@repo/trpc/trpc'
import { log } from '@repo/utils/client-utils'
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  '/api',
  createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(env.PORT, () => log.success(`Server running on port ${env.PORT}`))
