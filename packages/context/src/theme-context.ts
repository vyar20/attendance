import { createContext } from 'react'

export type ThemeContext = {
  theme: 'dark' | 'light'
  setThemeHandler: (theme: ThemeContext['theme']) => void
  toggleTheme: () => void
}

export const themeContext = createContext<ThemeContext>({
  theme: 'light',
  setThemeHandler: () => {},
  toggleTheme: () => {}
})
