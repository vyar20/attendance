import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const inputStyle = cva(
  'border border-border w-full rounded-md relative flex-col',
  {
    variants: {},
    defaultVariants: {}
  }
)

export type InputProps<T> = {
  children?: ReactNode
  start?: ReactNode
  end?: ReactNode
  label: string
} & VariantProps<typeof inputStyle> &
  T
