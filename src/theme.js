import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff0000" },
    background: {
      default: "#0f0f0f",
      paper: "#181818",
    },
    text: {
      primary: "#f1f1f1",
      secondary: "#aaaaaa",
    },
    divider: "#2a2a2a",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto","Arial",sans-serif',
    h5: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
  },
});

export default theme;
