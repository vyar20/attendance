import { useTheme } from '@repo/context/use-theme'
import { theme } from '@repo/ui/lib/theme'
import * as icons from 'lucide-react-native/icons'
import { type FC } from 'react'

type IconProps = {
  name: keyof typeof icons
  color?: string
  size?: number
}

export const Icon: FC<IconProps> = ({ name, color, size }) => {
  // eslint-disable-next-line import/namespace
  const LucideIcon = icons[name]
  const { theme: themeColor } = useTheme()
  const iconColor =
    color ?? (themeColor === 'dark' ? theme.dark.text : theme.light.text)

  console.log({ iconColor, themeColor })

  return (
    <LucideIcon color={iconColor} size={size} className='!text-foreground' />
  )
}
