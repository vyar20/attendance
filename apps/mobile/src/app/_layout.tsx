import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import '@repo/twconfig/global.css'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/use-color-scheme'
import config from '@repo/twconfig/base'

console.log(JSON.stringify(config, null, 2))

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='modal'
          options={{ presentation: 'modal', title: 'Modal' }}
        />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  )
}
