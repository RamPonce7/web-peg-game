import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HomePage } from "./modules/home/page";
import { ScoresProvider } from "./modules/scores/state/scores.context";

function App() {


  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f48fb1',
        },
      }
    })}>
      <CssBaseline />

      <ScoresProvider>
        <HomePage />
      </ScoresProvider>

    </ThemeProvider>

  )
}

export default App
