import { amber, deepOrange, grey } from "@material-ui/core/colors"

const getPaletteFromMode = mode => {
  let lightMode = {
    primary: amber,
    divider: amber[200],
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
      ...modePalette,
    },
    typography: {
      primary: {
        fontFamily: ["Fjalla One", "Roboto", "Arial"].join(","),
      },
      secondary: {
        fontFamily: ["Roboto", "Arial"].join(","),
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            background: "black",
          },
        },
      },
    },
  }
}

export default buildThemeConfig