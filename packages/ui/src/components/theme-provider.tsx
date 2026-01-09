import { type ThemeContext, themeContext } from '@repo/context/theme-context'
import { type FC, type ReactNode, useEffect, useState } from 'react'

type ThemeProviderProps = {
  children?: ReactNode
  onThemeChange?: (theme: ThemeContext['theme']) => void
  defaultTheme?: ThemeContext['theme']
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  onThemeChange,
  defaultTheme
}) => {
  const [theme, setTheme] = useState<ThemeContext['theme']>(
    defaultTheme ?? 'light'
  )

  const setThemeHandler = (theme: ThemeContext['theme']) => setTheme(theme)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    onThemeChange?.(theme)
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, setThemeHandler, toggleTheme }}>
      {children}
    </themeContext.Provider>
  )
}
