import { cn } from '@/client-utils'
import { useToggle } from '@repo/context/use-toggle'
import { inputStyle, type InputProps } from '@repo/ui/components/ui/input-style'
import { useEffect, useState, type FC } from 'react'
import {
  TextInput,
  View,
  type BlurEvent,
  type FocusEvent,
  type TextInputProps
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { Text } from './text'

export const Input: FC<InputProps<TextInputProps>> = ({
  className,
  label,
  variant,
  ...props
}) => {
  const { toggle: focus, onToggle: focusToggle } = useToggle()
  const [value, setValue] = useState('')
  const labelSv = useSharedValue(0)

  const labelStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: labelSv.value
      }
    ]
  }))

  const changeLabelPost = (pos: number) =>
    (labelSv.value = withTiming(pos, { duration: 200 }))

  const onFocus = (event: FocusEvent) => {
    props.onFocus?.(event)
    focusToggle()
  }

  const onBlur = (event: BlurEvent) => {
    props.onBlur?.(event)
    focusToggle()
  }
  const onChangeText = (text: string) => {
    props.onChangeText?.(text)
    setValue(text)
  }

  useEffect(() => {
    if (focus || value.length > 0) changeLabelPost(-28)
    if (!focus && value.length < 1) changeLabelPost(0)
  }, [focus])

  return (
    <View
      className={cn(
        !focus && '!border-border',
        inputStyle({ variant, className })
      )}
    >
      <Animated.View
        className='absolute top-4 z-10 ml-2 bg-background px-2'
        style={labelStyle}
      >
        <Text variant='h4' semiBold error={variant === 'error'}>
          {label}
        </Text>
      </Animated.View>
      <TextInput
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        className='h-16 px-4 text-foreground'
      />
    </View>
  )
}
