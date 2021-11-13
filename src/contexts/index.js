import { createTheme } from "@material-ui/core"
import React from "react"
import buildThemeConfig from "../themes"

export const ColorThemeContext = React.createContext()

const ColorThemeProvider = ({ children }) => {
  // const [isDark, setTheme] = useState(false)
  const [mode, setMode] = React.useState("light")
  const colorModeConfig = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(buildThemeConfig(mode)), [mode])

  // pass memoized theme
  return (
    <ColorThemeContext.Provider value={{ theme: theme, colorModeConfig: colorModeConfig }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

export default ColorThemeProvider
