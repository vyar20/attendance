import { Text } from '@/components/text'
import { useColorScheme } from 'nativewind'
import type { FC, ReactNode } from 'react'
import { Button, View } from 'react-native'

type IndexProps = {
  children?: ReactNode
}

const Index: FC<IndexProps> = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1'>
      <Text className='text-foreground/50'>{colorScheme}</Text>
      <Text className='text-foreground'>{colorScheme}</Text>

      <Button title='Change Theme' onPress={toggleColorScheme} />
    </View>
  )
}

export default Index
