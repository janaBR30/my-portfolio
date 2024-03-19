import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#2b364a',
    },
    secondary: {
      main: '#7375a5',
    },
  },
  typography: {
   fontFamily: "Segoe UI Symbol"
  }
});

theme = responsiveFontSizes (theme);

export default theme;
