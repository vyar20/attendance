import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const buttonStyle = cva(
  'px-8 py-6 items-center flex-row gap-4 justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        secondary: 'bg-secondary'
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
} & VariantProps<typeof buttonStyle> &
  T
