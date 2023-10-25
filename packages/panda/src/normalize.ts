import { defineGlobalStyles } from '@pandacss/dev';

const normalize = defineGlobalStyles({
  html: {
    fontSize: '$html',
  },
  body: {
    fontSize: '$body',
    fontFamily: 'sans',
    color: 'neutral.textContrast',

    _dark: {
      color: 'neutral.base',
      backgroundColor: 'neutral.textContrast',
    },
  },
  a: {
    color: 'primary',
    textDecoration: 'underline',

    '&:focus-visible': {
      outline: '2px solid currentcolor',
      outlineOffset: '2px',
    },

    _dark: {
      color: 'primary.base',
    },
  },
});

export default normalize;
