import { amber, deepOrange, grey } from "@material-ui/core/colors"

const getPaletteFromMode = mode => {
  let lightMode = {
    primary: amber,
    divider: amber[200],
    background: {
      default: grey[300],
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  }

  let darkMode = {
    primary: deepOrange,
    divider: deepOrange[700],
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  }

  return mode === "light" ? lightMode : darkMode
}

const buildThemeConfig = mode => {
  let modePalette = getPaletteFromMode(mode)

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
        fontFamily: ["Ubuntu", "Arial"].join(","),
      },
    },
  }
}

export default buildThemeConfig
