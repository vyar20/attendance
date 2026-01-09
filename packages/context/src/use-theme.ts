import { use } from "react"
import { themeContext } from "./theme-context"

export const useTheme = () => {
    const context = use(themeContext)

    if (!context) throw new Error('useContext should wrapped ThemeProvider')
    
    return context
}