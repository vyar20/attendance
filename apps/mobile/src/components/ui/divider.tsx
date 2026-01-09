import { cn } from '@/client-utils'
import { Text } from '@/components/ui/text'
import {
  dividerStyle,
  type DividerProps
} from '@repo/ui/components/ui/divider-style'
import type { ComponentProps, FC } from 'react'
import { View, type ViewProps } from 'react-native'

export const Divider: FC<
  DividerProps<ViewProps & { node?: ComponentProps<typeof Text> }>
> = ({ children, className, node, ...props }) => {
  return (
    <View {...props} className={cn(className)}>
      <View className={cn(dividerStyle())} />
      <View className='items-center justify-center'>
        <Text
          {...node}
          className='absolute w-fit bg-background px-4 text-center'
        >
          {children}
        </Text>
      </View>
    </View>
  )
}
