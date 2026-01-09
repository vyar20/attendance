import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native'
import hexToRgba from 'hex-to-rgba'
import { vars } from 'nativewind'
import colors from 'tailwindcss/colors'

const convertToTWFormat = (color: string) => {
  const c = color
    .replaceAll(' ', '')
    .split('(')[1]
    .split(',')
    .slice(0, 3)
    .join(' ')
  return c
}

export const theme = {
  light: {
    background: hexToRgba(colors.slate[200]),
    primary: hexToRgba(colors.indigo[500]),
    secondary: hexToRgba(colors.rose[500]),
    error: hexToRgba(colors.red[600]),
    border: hexToRgba(colors.slate[400]),
    borderForeground: hexToRgba(colors.indigo[500]),
    card: hexToRgba(colors.slate[200]),
    notification: hexToRgba(colors.slate[200]),
    text: hexToRgba(colors.slate[800])
  },
  dark: {
    background: hexToRgba(colors.slate[800]),
    primary: hexToRgba(colors.indigo[500]),
    secondary: hexToRgba(colors.rose[500]),
    error: hexToRgba(colors.red[600]),
    border: hexToRgba(colors.slate[600]),
    borderForeground: hexToRgba(colors.indigo[500]),
    card: hexToRgba(colors.slate[800]),
    notification: hexToRgba(colors.slate[800]),
    text: hexToRgba(colors.slate[200])
  }
}

export const themes = {
  light: vars({
    '--background': convertToTWFormat(theme.light.background),
    '--primary': convertToTWFormat(theme.light.primary),
    '--secondary': convertToTWFormat(theme.light.secondary),
    '--error': convertToTWFormat(theme.light.error),
    '--border': convertToTWFormat(theme.light.border),
    '--card': convertToTWFormat(theme.light.card),
    '--notification': convertToTWFormat(theme.light.notification),
    '--text': convertToTWFormat(theme.light.text)
  }),
  dark: vars({
    '--background': convertToTWFormat(theme.dark.background),
    '--primary': convertToTWFormat(theme.dark.primary),
    '--secondary': convertToTWFormat(theme.dark.secondary),
    '--error': convertToTWFormat(theme.dark.error),
    '--border': convertToTWFormat(theme.dark.border),
    '--card': convertToTWFormat(theme.dark.card),
    '--notification': convertToTWFormat(theme.dark.notification),
    '--text': convertToTWFormat(theme.dark.text)
  })
}

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...theme.dark
    }
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...theme.light
    }
  }
}
