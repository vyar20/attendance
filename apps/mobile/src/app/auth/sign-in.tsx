import Facebook from '@/assets/images/facebook.svg'
import Google from '@/assets/images/google.svg'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { Form } from '@/components/ui/form'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@repo/ui/lib/api'
import {} from '@repo/utils/client-utils'
import {
  signInValidation,
  type SignInValidation
} from '@repo/validations/sign-in-validation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Link } from 'expo-router'
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
  const { data } = useQuery(api.hello.queryOptions())
  const {
    mutate,
    isPending,
    data: result
  } = useMutation(api.auth.signIn.mutationOptions())

  console.log(result, data)

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
    defaultValues: {
      email: 'vyar1999@gmail.com',
      password: 'Vyar20051999!'
    }
  })

  const onSubmitHandler = (input: SignInValidation) => {
    console.log(input)

    mutate(input)
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
        <Form
          variant='secondary'
          control={control}
          name='password'
          label='Password'
        />

        <Button
          isPending={isPending}
          end={<Icon name='LogIn' />}
          onPress={handleSubmit(onSubmitHandler)}
        >
          Sign In
        </Button>

        <Divider node={{ variant: 'h3' }} className='mt-14'>
          Or Continue With
        </Divider>

        <View className='mt-10 flex-row justify-center gap-4'>
          <Button variant='outline' start={<Google />}>
            Google
          </Button>
          <Button variant='outline' start={<Facebook />}>
            Facebook
          </Button>
        </View>
      </View>

      <Link href='/auth/sign-up' className='mb-10 mt-auto'>
        <Text variant='h3' className='text-center'>
          Don&apos;t have account?{' '}
          <Text variant='h3' className='text-sky-500'>
            Register
          </Text>
        </Text>
      </Link>
    </View>
  )
}

export default SignIn
