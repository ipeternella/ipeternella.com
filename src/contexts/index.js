import { createTheme } from "@material-ui/core"
import React from "react"
import { ThemeProvider } from "styled-components"
import buildThemeConfig, { getThemeFromLocalStorage } from "../themes"

export const ColorThemeContext = React.createContext()

const ColorThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(getThemeFromLocalStorage(localStorage))
  const theme = React.useMemo(() => createTheme(buildThemeConfig(mode)), [mode])
  const colorModeConfig = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          prevMode = prevMode === "light" ? "dark" : "light"
          localStorage.setItem("theme", prevMode)

          return prevMode
        })
      },
    }),
    []
  )

  return (
    <ColorThemeContext.Provider value={{ theme: theme, toggleColorMode: colorModeConfig }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  )
}

export default ColorThemeProvider
