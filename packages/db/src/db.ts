import { PrismaClient } from '@prisma/client';
import { env } from '@repo/env/index';

const globalForPrisma = globalThis as unknown as {
  db: PrismaClient;
};

export const db =
  globalForPrisma.db ??
  new PrismaClient({
    log:
      env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db;