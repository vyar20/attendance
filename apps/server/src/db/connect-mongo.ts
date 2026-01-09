import { log, p } from '@/client-utils.js'
import { env } from '@/env.js'
import mongoose from 'mongoose'

export const connectMongo = async () => {
  const [err] = await p(mongoose.connect(env.DATABASE_URL))

  if (err) {
    log.error(`Failed to connect to database. ${err.message}`)

    process.exit(1)
  }

  log.success('Database connected successfully')
}
