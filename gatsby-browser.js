import "@fontsource/fjalla-one"
import "@fontsource/roboto"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/themes/prism-okaidia.css"
import React from "react"
import ColorThemeProvider from "./src/contexts"

// Gatsby hook which wraps all the pages -> no unmounting!
export const wrapRootElement = ({ element }) => {
  return <ColorThemeProvider>{element}</ColorThemeProvider>
}
