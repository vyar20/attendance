import { Text } from '@/components/ui/text'
import type { ComponentProps, ReactNode } from 'react'
import {
  type FieldValues,
  useController,
  type UseControllerProps
} from 'react-hook-form'
import { View } from 'react-native'
import { Input } from './input'

type FormProps<T extends FieldValues = FieldValues> = {
  children?: ReactNode
} & UseControllerProps<T> &
  ComponentProps<typeof Input>

export const Form = <T extends FieldValues>({
  control,
  name,
  ...props
}: FormProps<T>) => {
  const { field, fieldState } = useController({
    control,
    name
  })

  const error = fieldState.error?.message

  return (
    <View className='w-full'>
      <Input
        {...props}
        variant={error ? 'error' : props.variant}
        onChangeText={field.onChange}
        value={field.value}
        onBlur={field.onBlur}
      />
      {error && (
        <Text error bold>
          {error}
        </Text>
      )}
    </View>
  )
}
