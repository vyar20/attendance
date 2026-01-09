import chalk from 'chalk'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const isServer =
  typeof document === 'undefined' && typeof window === 'undefined'

export const log = {
  success: (message: unknown) =>
    console.log(chalk.green(`[SUCCESS]: ✅ ${message}`)),
  error: (message: unknown) =>
    console.log(chalk.green(`[ERROR]: ❌ ${message}`)),
  warn: (message: unknown) => console.log(chalk.green(`[WARN]: ⚠️ ${message}`))
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))
