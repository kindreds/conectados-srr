import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  body: 'Gothan',
  heading: 'Mont',
};

const breakpoints = createBreakpoints({
  ms: '23.5em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
  '1xl': '100em',
});

const theme = extendTheme({
  colors: {
    brand: {
      50: '#dbfdff',
      100: '#b1f2fc',
      200: '#84e7f8',
      300: '#57ddf4',
      400: '#30d4f0',
      500: '#1cbad7',
      600: '#0b91a8',
      700: '#006779',
      800: '#003f4a',
      900: '#00171c',
    },
    brand2: {
      50: '#def4ff',
      100: '#b3dbfe',
      200: '#86c3f8',
      300: '#58abf3',
      400: '#2d93ef',
      500: '#177ad6',
      600: '#0c5fa7',
      700: '#034478',
      800: '#00294b',
      900: '#000f1e',
    },
    gray2: {
      50: '#feeef2',
      100: '#dfd7d9',
      200: '#c3bebe',
      300: '#a7a5a5',
      400: '#8d8c8c',
      500: '#737272',
      600: '#5b5959',
      700: '#423e3e',
      800: '#2a2526',
      900: '#17090d',
    },
    primary: '#0a518f',
    secundary: '#0ca3bd',
    letterGray: '#706f6f',
    letterBlue: '#0a518f',
    bgGray: '#e3e3e3',
    bgWhite: '#ffffff',
    bgFooter: '#2d3334',
  },
  fonts,
  breakpoints,
});

export default theme;
