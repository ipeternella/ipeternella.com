import "@fontsource/fjalla-one"
import "@fontsource/roboto"
import React from "react"
import ColorThemeProvider from "./src/contexts"

export const wrapRootElement = ({ element }) => {
  return <ColorThemeProvider>{element}</ColorThemeProvider>
}
