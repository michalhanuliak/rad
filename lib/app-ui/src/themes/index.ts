'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#682EE4',
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        sizeMedium: {
          '.MuiSvgIcon-root': {
            fontSize: '2.4rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
          fontWeight: 500,
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#EEEEF4',
          fontSize: '62.5%',
          fontWeight: 500,
        },
        body: {
          color: '#13131D',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '3.2rem',
      lineHeight: '3.6rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.8rem',
      lineHeight: '3.2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.6rem',
      lineHeight: '3rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      fontWeight: 400,
      color: '#7D81A5',
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
      color: '#7D81A5',
    },
  },
});

export default theme;
