import "@fontsource/fjalla-one"
import "@fontsource/ubuntu"
import React from "react"
import ColorThemeProvider from "./src/contexts"

// Gatsby hook, takes the whole "site" and passes it as a props
export const wrapRootElement = ({ element }) => {
  return <ColorThemeProvider>{element}</ColorThemeProvider>
}
