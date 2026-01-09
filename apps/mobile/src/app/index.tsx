import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { useTheme } from '@/use-theme'
import type { FC, ReactNode } from 'react'
import { View } from 'react-native'

type IndexProps = {
  children?: ReactNode
}

const Index: FC<IndexProps> = () => {
  const { toggleTheme } = useTheme()

  return (
    <View className='flex-1'>
      <Button onPress={toggleTheme} end={<Icon name='LogIn' />}>
        Change Theme
      </Button>
    </View>
  )
}

export default Index
