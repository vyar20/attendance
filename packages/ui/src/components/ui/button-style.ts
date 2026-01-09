import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const buttonStyle = cva(
  'px-6 py-4 items-center flex-row gap-4 rounded-md justify-center disabled:scale-90',
  {
    variants: {
      variant: {
        primary: 'bg-primary disabled:bg-primary/50',
        secondary: 'bg-secondary disabled:bg-secondary/50',
        error: 'bg-error disabled:bg-error/50',
        outline: 'active:bg-border/50 border border-border'
      },
      roundedFull: {
        true: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

export type ButtonProps<T> = {
  children?: ReactNode
  start?: ReactNode
  end?: ReactNode
  isPending?: boolean
} & VariantProps<typeof buttonStyle> &
  T
