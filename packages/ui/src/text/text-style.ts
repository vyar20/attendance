import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const textStyle = cva('text-red-500')

export type TextProps<T> = {
  children?: ReactNode
} & VariantProps<typeof textStyle> &
  T
