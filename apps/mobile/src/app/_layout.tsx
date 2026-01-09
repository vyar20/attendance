import { ThemeProvider } from '@/components/theme-provider'
import { type ThemeContext } from '@/theme-context'
import { useTheme } from '@/use-theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeProvider as RNThemeProvider } from '@react-navigation/native'
import '@repo/twconfig/global.css'
import { NAV_THEME, themes } from '@repo/ui/lib/theme'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { View } from 'react-native'
import 'react-native-reanimated'

export const unstable_settings = {
  initialRouteName: 'auth/sign-in'
}

const RootLayout = () => {
  const { colorScheme, setColorScheme } = useColorScheme()
  const { setThemeHandler } = useTheme()

  const getSavedTheme = async () => {
    const savedTheme = (await AsyncStorage.getItem(
      'theme'
    )) as ThemeContext['theme']

    if (savedTheme) {
      setColorScheme(savedTheme)
      setThemeHandler(savedTheme)
    }
  }

  useEffect(() => {
    AsyncStorage.setItem('theme', colorScheme!)
  }, [colorScheme])

  useEffect(() => {
    getSavedTheme()
  }, [])

  return (
    <ThemeProvider onThemeChange={setColorScheme} defaultTheme={colorScheme}>
      <RNThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <View className='flex-1' style={themes[colorScheme ?? 'light']}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='auth/sign-in' />
          </Stack>
          <StatusBar style='auto' />
        </View>
      </RNThemeProvider>
    </ThemeProvider>
  )
}

export default RootLayout
