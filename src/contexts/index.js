import { createTheme } from "@material-ui/core"
import React from "react"
import { ThemeProvider } from "styled-components"
import buildThemeConfig, { getThemeFromLocalStorage, toggleThemeFromLocalStorage } from "../themes"

export const ColorThemeContext = React.createContext()

const ColorThemeProvider = ({ children }) => {
  let storage = null
  if (typeof window !== "undefined") storage = localStorage

  const [mode, setMode] = React.useState(getThemeFromLocalStorage(storage))
  const theme = React.useMemo(() => createTheme(buildThemeConfig(mode)), [mode])
  const toggleTheme = () => setMode(prevMode => toggleThemeFromLocalStorage(prevMode))

  return (
    <ColorThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  )
}

export default ColorThemeProvider
