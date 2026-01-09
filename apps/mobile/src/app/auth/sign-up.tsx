import Facebook from '@/assets/images/facebook.svg'
import Google from '@/assets/images/google.svg'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { Form } from '@/components/ui/form'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { api } from '@/lib/api'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  signUpValidation,
  type SignUpValidation
} from '@repo/validations/sign-up-validation'
import { useMutation } from '@tanstack/react-query'
import { Link } from 'expo-router'
import { type FC, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

type SignUpProps = {
  children?: ReactNode
}

const SignUp: FC<SignUpProps> = () => {
  const { mutate, isPending } = useMutation(api.auth.signUp.mutationOptions())
  const { control, handleSubmit } = useForm<SignUpValidation>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      name: 'Andicha Renata',
      email: 'vyar1999@gmail.com',
      password: 'Vyar20051999!'
    }
  })

  const onSubmitHandler = (input: SignUpValidation) => mutate(input)

  return (
    <View className='flex-1'>
      <View className='h-72 w-full bg-slate-900 px-8 pb-10'>
        <Text variant='h1' className='mt-auto'>
          Register
        </Text>
        <Text variant='h4' muted className='mt-4'>
          Please register to continue
        </Text>
      </View>

      <View className='gap-4 p-8'>
        <Form control={control} name='name' label='Name' />
        <Form control={control} name='email' label='Email' />
        <Form
          control={control}
          name='password'
          label='Password'
          secureTextEntry
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

      <Link href='/auth/sign-in' className='mb-10 mt-auto'>
        <Text variant='h3' className='text-center'>
          Already have account?{' '}
          <Text variant='h3' className='text-sky-500'>
            Sign in
          </Text>
        </Text>
      </Link>
    </View>
  )
}

export default SignUp
