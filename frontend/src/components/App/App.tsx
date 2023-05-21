import { FunctionComponent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Router } from '../Router';
import theme from '../../themes';

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};
