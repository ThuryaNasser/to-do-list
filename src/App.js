import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "style/theme";
import { Router } from "routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>
);

export default App;
