import { createTheme } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import buildThemeConfig, { getThemeFromLocalStorage, toggleThemeFromLocalStorage } from "../themes"

export const ColorThemeContext = React.createContext()

const ColorThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(null)
  const theme = React.useMemo(() => createTheme(buildThemeConfig(mode)), [mode])
  const toggleTheme = () => setMode(prevMode => toggleThemeFromLocalStorage(prevMode))
  const [mounted, setMounted] = useState(false)

  // To avoid Gatsby's rehydration problem: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  // as localStorage does not exist while SSRing the page (only when mounted the compenent should return)
  useEffect(() => {
    setMounted(true)
    setMode(getThemeFromLocalStorage(localStorage))
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ColorThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  )
}

export default ColorThemeProvider
