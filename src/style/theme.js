import { createTheme } from '@mui/material/styles';
import palette from './palette';

const baseTheme = {
  shape: {
    borderRadius: 6,
  },
  palette,
  typography: {
    fontFamily: 'Josefin Sans,  sans-serif',
  },
};

const theme = createTheme({
  ...baseTheme,
});

export { theme };
