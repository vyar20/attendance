import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const dividerStyle = cva('w-full h-1 bg-border absolute top-1/2')

export type DividerProps<T> = {
  children?: ReactNode
  parent?: T
  node?: T
} & VariantProps<typeof dividerStyle> &
  T
