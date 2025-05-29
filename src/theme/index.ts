import { createTheme } from "@mui/material";
import { Theme as MuiTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  // Nói với Emotion rằng theme là kiểu của MUI
  export interface Theme extends MuiTheme {}
}

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      primaryMed: string;
      primaryHigh: string;
      primaryBase: string;
      info: string;
      greySurface0: string;
      greySurface1: string;
      greySurface2: string;
      disabledBase: string;
      disabledLow: string;
      black: string;
    };
    outline: {
      primaryMed: string;
      greyLow: string;
      greyBase: string;
      greyMed: string;
    };
    textCustom: {
      primary: string;
      info: string;
      success: string;
      danger: string;
      greyLow: string;
      greyBase: string;
      greyMed: string;
      greyHigh: string;
      white: string;
    };
  }

  interface PaletteOptions {
    surface?: Partial<Palette["surface"]>;
    outline?: Partial<Palette["outline"]>;
    textCustom?: Partial<Palette["textCustom"]>;
  }
}

const theme = createTheme({
  cssVariables: true,

  palette: {
    primary: {
      main: "#EF151E",
      dark: "#CD0F28",
      light: "#FFF2EC",
      contrastText: "#FFFFFF",
    },

    info: {
      main: "#F0F5FF",
      contrastText: "#1943C1",
    },

    background: {
      paper: "#F9F9FA",
    },

    surface: {
      primaryMed: "#EF151E",
      primaryHigh: "#CD0F28",
      primaryBase: "#FFF2EC",
      info: "#F0F5FF",
      greySurface0: "#FFFFFF",
      greySurface1: "#F9F9FA",
      greySurface2: "#F4F4F6",
      disabledBase: "#F4F4F6",
      disabledLow: "#EBECF0",
      black: "#000000",
    },

    outline: {
      primaryMed: "#FA8371",
      greyLow: "#EBECF0",
      greyBase: "#F4F4F6",
      greyMed: "#DDDFE4",
    },

    textCustom: {
      primary: "#CD0F28",
      info: "#1943C1",
      success: "#458116",
      danger: "#CE2E02",
      greyLow: "#8C929C",
      greyBase: "#C3C6CC",
      greyMed: "#5B616D",
      greyHigh: "#0A0C11",
      white: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#0A0C11",
          secondary: "#5B616D",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});

export default theme;
