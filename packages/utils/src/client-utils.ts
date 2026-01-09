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

export const p = <T>(promise: Promise<T>): Promise<[null, T] | [Error]> =>
  promise.then((data) => [null, data] as [null, T]).catch((err) => [err])

export const delay = (timeout: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, timeout))
