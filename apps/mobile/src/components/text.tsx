import { type TextProps, textStyle } from '@repo/ui/text/text-style'
import { cn } from '@repo/utils/client-utils'
import { type FC } from 'react'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'

export const Text: FC<TextProps<RNTextProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RNText {...props} className={cn(textStyle({ className }))}>
      {children}
    </RNText>
  )
}
