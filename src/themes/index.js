import { grey } from "@material-ui/core/colors"

export const getPaletteFromMode = mode => {
  const lightMode = {
    background: {
      primary: grey[50],
    },
    text: {
      primary: grey[900],
    },
  }

  const darkMode = {
    background: {
      primary: grey[900],
    },
    text: {
      primary: "#fff",
    },
  }

  return mode === "light" ? lightMode : darkMode
}

export const buildThemeConfig = mode => {
  const modePalette = getPaletteFromMode(mode)

  return {
    palette: {
      mode,
      foxColors: {
        facePrimary: "#f09d48",
        faceSecondary: "#ffcc98",
        hood: "#5b6de1",
      },
      ...modePalette,
    },
    typography: {
      primary: {
        fontFamily: ["Fjalla One", "Arial"].join(","),
      },
      secondary: {
        fontFamily: ["Roboto", "Arial"].join(","),
      },
    },
  }
}

export const getThemeFromLocalStorage = localStorage => {
  if (localStorage === null) return "light"

  const theme = localStorage.getItem("theme")

  if (theme === null) {
    return "light"
  }

  return theme
}

export const toggleThemeFromLocalStorage = prevMode => {
  prevMode = prevMode === "light" ? "dark" : "light"
  localStorage.setItem("theme", prevMode)

  return prevMode
}

export default buildThemeConfig
