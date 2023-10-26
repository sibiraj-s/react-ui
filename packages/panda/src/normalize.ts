import { defineGlobalStyles } from '@pandacss/dev';

const normalize = defineGlobalStyles({
  html: {
    fontSize: 'root',
  },
  body: {
    fontSize: 'body',
    fontFamily: 'sans',
    color: 'neutral.950',

    _dark: {
      color: 'neutral.50',
      backgroundColor: 'neutral.950',
      colorScheme: 'dark',
    },
  },
  a: {
    color: 'accent',
    textDecoration: 'underline',

    '&:focus-visible': {
      outline: '2px solid currentcolor',
      outlineOffset: '2px',
    },

    _dark: {
      color: 'accent.50',
    },
  },
});

export default normalize;
