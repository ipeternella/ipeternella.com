import "@fontsource/fjalla-one"
import "@fontsource/roboto"
import React from "react"
import ColorThemeProvider from "./src/contexts"

// Gatsby hook which wraps all the pages -> no unmounting!
export const wrapRootElement = ({ element }) => {
  return <ColorThemeProvider>{element}</ColorThemeProvider>
}
