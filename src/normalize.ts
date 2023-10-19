import { defineGlobalStyles } from '@pandacss/dev';

const normalize = defineGlobalStyles({
  html: {
    fontSize: '$html',
  },
  body: {
    fontSize: '$body',
    fontFamily: '$body',
    color: '$body',
  },
  a: {
    color: 'primary',
    '&:focus-visible': {
      outline: '2px solid currentcolor',
      outlineOffset: '2px',
    },
  },
});

export default normalize;
