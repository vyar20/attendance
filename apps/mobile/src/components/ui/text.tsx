import { type TextProps, textStyle } from '@repo/ui/components/ui/text-style'
import { cn } from '@repo/utils/client-utils'
import { type FC } from 'react'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'

export const Text: FC<TextProps<RNTextProps>> = ({
  children,
  className,
  variant,
  muted,
  error,
  bold,
  semiBold,
  ...props
}) => {
  return (
    <RNText
      {...props}
      className={cn(
        textStyle({ variant, muted, bold, semiBold, error, className })
      )}
    >
      {children}
    </RNText>
  )
}
