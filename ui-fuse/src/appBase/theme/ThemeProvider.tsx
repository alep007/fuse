import { useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import ComponentsOverrides from "./overrides";
import customShadows from "./customShadows";
import shadows from "./shadows";
import GlobalStyles from "./globalStyles";
import themeTypography from "./typography";

const ThemeProvider = ({ children }: any) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography: themeTypography(palette),
      shadows: shadows(),

      customShadows: customShadows(),
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: "48px",
          padding: "16px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
    }),
    [],
  );
  // @ts-ignore
  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />

      <MUIThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
