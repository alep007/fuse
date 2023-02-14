import { useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import ComponentsOverrides from "./overrides";
import customShadows from "./customShadows";
import shadows from "./shadows";
import GlobalStyles from "./globalStyles";

const ThemeProvider = ({ children }: any) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography: {
        fontFamily: "Poppins",
      },
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    [],
  );
  // @ts-ignore
  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
