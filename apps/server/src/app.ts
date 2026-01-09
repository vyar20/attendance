import { env } from '@repo/env/env.js'
import { createContext } from '@repo/trpc/context.js'
import { appRouter } from '@repo/trpc/routes/_app.js'
import { createExpressMiddleware } from '@repo/trpc/trpc.js'
import { log } from '@repo/utils/client-utils.js'
import express from 'express'
import { connectMongo } from './db/connect-mongo.js'

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

connectMongo().then(() =>
  app.listen(env.PORT, () => log.success(`Server running on port ${env.PORT}`))
)
