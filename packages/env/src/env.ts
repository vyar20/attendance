import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({
  path: path.resolve(process.cwd(), '..', '..', '.env'),
  quiet: true,
});

const isServer =
  typeof window === 'undefined' || typeof document === 'undefined';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number(),
  SESSION_SECRET: z.string(),
});

export const env = (() => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.log(
      '❌ Invalid environment variables:',
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2),
    );

    return process.exit(1);
  }

  if (isServer)
    return Object.keys(envSchema.shape).reduce(
      (acc, key) => ({ ...acc, [key]: process.env[key] }),
      {} as Env,
    );

  return Object.keys(envSchema.shape)
    .filter((key) => key.startsWith('PUBLIC_'))
    .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {} as Env);
})();

export type Env = z.infer<typeof envSchema>;
