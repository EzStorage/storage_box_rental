import { createTheme } from "@mui/material";

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
      primaryMed: string;
      primaryHigh: string;
      info: string;
      success: string;
      danger: string;
      greyLow: string;
      greyBase: string;
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
  palette: {
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
      primaryMed: "#5B616D",
      primaryHigh: "#CD0F28",
      info: "#1943C1",
      success: "#458116",
      danger: "#CE2E02",
      greyLow: "#8C929C",
      greyBase: "#C3C6CC",
      greyHigh: "#0A0C11",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
