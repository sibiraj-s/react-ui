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
});

export default normalize;
