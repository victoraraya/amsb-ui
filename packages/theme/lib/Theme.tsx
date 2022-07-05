import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#147BB0",
    },
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
    },
    h2: {
      fontSize: "3.125rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    overline: {
      fontSize: "0.75rem",
    },
  },
});

export interface Props {
  children: React.ReactNode;
}

const AirMilesThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AirMilesThemeProvider;
