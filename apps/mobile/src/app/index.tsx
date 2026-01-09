import { Redirect } from 'expo-router'
import type { FC, ReactNode } from 'react'

type IndexProps = {
  children?: ReactNode
}

const Index: FC<IndexProps> = () => {
  return <Redirect href='/auth/sign-up' />
}

export default Index
