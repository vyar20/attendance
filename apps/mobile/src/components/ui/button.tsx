import {
  type ButtonProps,
  buttonStyle
} from '@repo/ui/components/ui/button-style'
import { cn } from '@repo/utils/client-utils'
import { type FC, useEffect } from 'react'
import {
  type GestureResponderEvent,
  Pressable,
  type PressableProps
} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'
import { Icon } from './icon'
import { Text } from './text'

export const Button: FC<ButtonProps<PressableProps>> = ({
  start,
  end,
  children,
  className,
  variant,
  disabled,
  roundedFull,
  isPending,
  ...props
}) => {
  const buttonSize = useSharedValue(1)
  const rotatePos = useSharedValue(0)

  const animatedParentStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: buttonSize.value
      }
    ]
  }))

  const animatedIconStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotatePos.value}deg` }]
  }))

  const changeButtonSize = (size: number) =>
    (buttonSize.value = withTiming(size, { duration: 300 }))

  const changePendingRotate = (rotation: number) =>
    (rotatePos.value = withRepeat(
      withTiming(rotation, { duration: 1000, easing: Easing.linear }),
      -1,
      false
    ))

  const onPressed = (event: GestureResponderEvent) => {
    changeButtonSize(0.95)

    props.onPress?.(event)
  }

  const onPressOut = (event: GestureResponderEvent) => {
    changeButtonSize(1)
    props.onPressOut?.(event)
  }

  useEffect(() => {
    if (disabled) changeButtonSize(0.95)
    if (!disabled) changeButtonSize(1)
  }, [disabled])

  useEffect(() => {
    if (isPending) changePendingRotate(360)

    if (!isPending) changePendingRotate(0)
  }, [isPending])

  return (
    <Animated.View style={animatedParentStyles}>
      <Pressable
        {...props}
        disabled={isPending ?? disabled}
        onPress={onPressed}
        onPressOut={onPressOut}
        className={cn(buttonStyle({ variant, roundedFull, className }))}
      >
        {isPending ? (
          <Animated.View style={animatedIconStyles}>
            <Icon name='LoaderCircle' />
          </Animated.View>
        ) : (
          <>
            {start}
            {typeof children === 'string' && <Text bold>{children}</Text>}
            {end}
          </>
        )}
      </Pressable>
    </Animated.View>
  )
}
