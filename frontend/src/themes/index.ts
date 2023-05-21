import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#0051FF',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  spacing: 0,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
