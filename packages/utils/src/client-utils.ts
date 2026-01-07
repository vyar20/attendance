import chalk from 'chalk'

export const isServer =
  typeof document === 'undefined' && typeof window === 'undefined'

export const log = {
  success: (message: unknown) =>
    console.log(chalk.green(`[SUCCESS]: ✅ ${message}`)),
  error: (message: unknown) =>
    console.log(chalk.green(`[ERROR]: ❌ ${message}`)),
  warn: (message: unknown) => console.log(chalk.green(`[WARN]: ⚠️ ${message}`))
}
