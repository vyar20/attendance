import { cn } from '@repo/utils/client-utils'
import type { FC } from 'react'
import { Text as RNText, type TextProps } from 'react-native'

export const Text: FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <RNText {...props} className={cn({ className })}>
      {children}
    </RNText>
  )
}
