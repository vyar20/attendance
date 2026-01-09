import { type ThemeContext } from '@/theme-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeProvider as RNThemeProvider } from '@react-navigation/native'
import '@repo/twconfig/global.css'
import { NAV_THEME, themes } from '@repo/ui/lib/theme'
import { ThemeProvider } from '@repo/ui/theme-provider'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { View } from 'react-native'
import 'react-native-reanimated'

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme()

  const getSavedTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('theme')

    if (savedTheme) setColorScheme(savedTheme as ThemeContext['theme'])
  }

  useEffect(() => {
    AsyncStorage.setItem('theme', colorScheme!)
  }, [colorScheme])

  useEffect(() => {
    getSavedTheme()
  }, [])

  return (
    <ThemeProvider onThemeChange={setColorScheme}>
      <RNThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <View
          className='flex-1 bg-background'
          style={themes[colorScheme ?? 'light']}
        >
          <Stack
            screenOptions={{
              headerShown: true,
              contentStyle: {
                backgroundColor: 'transparent'
              }
            }}
          >
            <Stack.Screen name='index' />
          </Stack>
          <StatusBar style='auto' />
        </View>
      </RNThemeProvider>
    </ThemeProvider>
  )
}
