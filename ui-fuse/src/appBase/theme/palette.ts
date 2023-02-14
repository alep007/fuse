import { alpha } from "@mui/material";

export const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  1000: "#1D1D1F",
  10: "#EFEFEF",
};

export const PRIMARY = {
  lighter: "#6791DF",
  light: "#356dd4",
  main: "#0349ca",
  dark: "#342b90",
  darker: "#02338d",
  contrastText: "#fff",
};

export const SECONDARY = {
  lighter: "#fca3cd",
  light: "#fa5ea8",
  main: "#FFC300",
  dark: "#c71468",
  darker: "#ae115b",
  contrastText: "#fff",
};

export const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

export const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

export const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

export const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

export const WHITE = {
  main: "#FFFFFF",
};

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  warning: WARNING,
  info: INFO,
  success: SUCCESS,
  divider: alpha(GREY[500], 0.24),
  grey: GREY,
  common: {
    grey: "#EFEFEF",
    white: "#FFFFFF",
    black: "#1D1D1F",
  },
  text: {
    primary: GREY[1000],
    secondary: GREY[600],
    disabled: GREY[10],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
  },
};

export default palette;
