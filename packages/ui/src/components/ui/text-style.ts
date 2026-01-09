import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const textStyle = cva('text-foreground', {
  variants: {
    variant: {
      base: 'text-base',
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl'
    },
    bold: {
      true: 'font-bold'
    },
    semiBold: {
      true: 'font-semibold'
    },
    muted: {
      true: 'text-foreground/50'
    },
    error: {
      true: '!text-red-500'
    }
  },
  defaultVariants: {
    variant: 'base'
  }
})

export type TextProps<T> = {
  children?: ReactNode
} & VariantProps<typeof textStyle> &
  T
