import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRouter from './router';

const THEME = createTheme({
  typography: {
    fontFamily: `"Andika", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: '#1098ad',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={THEME}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
