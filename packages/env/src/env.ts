import { log } from '@repo/utils/client-utils.js'
import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.coerce.number()
})

type ENVSchema = z.infer<typeof envSchema>

export const env = (() => {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    log.error(
      `Invalid Environtment variable. ${JSON.stringify(parsed.error.issues, null, 2)}`
    )

    process.exit(1)
  }

  return Object.keys(envSchema.shape).reduce(
    (acc, key) => ({ ...acc, [key]: process.env[key] }),
    {} as ENVSchema
  )
})()
