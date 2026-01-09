import {
  type ButtonProps,
  buttonStyle
} from '@repo/ui/components/ui/button-style'
import { cn } from '@repo/utils/client-utils'
import { type FC } from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { Text } from './text'

export const Button: FC<ButtonProps<PressableProps>> = ({
  start,
  end,
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <Pressable {...props} className={cn(buttonStyle({ variant, className }))}>
      {start}
      {typeof children === 'string' && <Text bold>{children}</Text>}
      {end}
    </Pressable>
  )
}
