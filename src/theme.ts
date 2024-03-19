import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#7375a5',
    },
    secondary: {
      main: '#6cf3d5',
    },
  },
  typography: {
   fontFamily: "Segoe UI Symbol"
  }
});

theme = responsiveFontSizes (theme);

export default theme;
