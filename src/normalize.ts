import { globalCss } from './stitches.config';

const normalize = (): ReturnType<typeof globalCss> => {
  return globalCss({
    html: {
      fontSize: '$html',
    },
    body: {
      fontSize: '$body',
      fontFamily: '$body',
      color: '$default',
    },
  });
};

export default normalize;
