import { type ThemeContext, themeContext } from '@repo/context/theme-context'
import { type FC, type ReactNode, useEffect, useState } from 'react'

type ThemeProviderProps = {
  children?: ReactNode
  onThemeChange?: (theme: ThemeContext['theme']) => void
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  onThemeChange
}) => {
  const [theme, setTheme] = useState<ThemeContext['theme']>('light')

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
