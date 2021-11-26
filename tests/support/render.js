import { render } from "@testing-library/react"
import React from "react"
import ColorThemeProvider from "../../src/contexts"

const renderWithProviders = children => {
  return render(<ColorThemeProvider>{children}</ColorThemeProvider>)
}

export { renderWithProviders as render }
