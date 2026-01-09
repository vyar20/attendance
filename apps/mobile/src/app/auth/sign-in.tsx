import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  signInValidation,
  type SignInValidation
} from '@repo/validations/sign-in-validation'
import { useEffect, type FC, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

type SignInProps = {
  children?: ReactNode
}

const SignIn: FC<SignInProps> = () => {
  const waveSv = useSharedValue(-15)

  const waveStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${waveSv.value}deg`
      }
    ],
    transformOrigin: 'bottom'
  }))

  const { control, handleSubmit } = useForm<SignInValidation>({
    resolver: zodResolver(signInValidation),
    values: {
      email: 'vyar1999@gmail.com',
      password: 'Vyar20051999!'
    }
  })

  const onSubmitHandler = (input: SignInValidation) => {
    console.log(input)
  }

  useEffect(() => {
    waveSv.value = withRepeat(withTiming(15, { duration: 300 }), -1, true)
  }, [waveSv])

  return (
    <View className='flex-1'>
      <View className='h-72 w-full bg-slate-900 px-8 pb-10'>
        <Text variant='h1' className='mt-auto'>
          Hi,{' '}
          <Animated.View style={waveStyle}>
            <Text variant='h2'>👋</Text>
          </Animated.View>
        </Text>
        <Text variant='h1'>Welcome Back</Text>
        <Text variant='h4' muted className='mt-4'>
          Please sign in to continue
        </Text>
      </View>

      <View className='gap-4 p-8'>
        <Form control={control} name='email' label='Email' />
        <Form control={control} name='password' label='Password' />

        <Button
          end={<Icon name='LogIn' />}
          onPress={handleSubmit(onSubmitHandler)}
        >
          Sign In
        </Button>
      </View>
    </View>
  )
}

export default SignIn
