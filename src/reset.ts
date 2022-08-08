import { globalCss } from './stitches.config';

const reset = (): ReturnType<typeof globalCss> => {
  return globalCss({
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,

      '&::before': {
        boxSizing: 'border-box',
      },
      '&::after': {
        boxSizing: 'border-box',
      },
    },

    html: {
      height: '100%',
    },

    body: {
      height: '100%',
      lineHeight: 1.5,
      '-webkit-font-smoothing': 'antialiased',
    },

    img: { display: 'block', maxWidth: '100%', verticalAlign: 'middle' },
    svg: { display: 'block', maxWidth: '100%', verticalAlign: 'middle' },
    picture: { display: 'block', maxWidth: '100%' },
    video: { display: 'block', maxWidth: '100%' },
    canvas: { display: 'block', maxWidth: '100%' },

    input: { font: 'inherit' },
    button: { font: 'inherit' },
    textarea: { font: 'inherit' },
    select: { font: 'inherit' },

    p: { overflowWrap: 'break-word' },
    h1: { overflowWrap: 'break-word' },
    h2: { overflowWrap: 'break-word' },
    h3: { overflowWrap: 'break-word' },
    h4: { overflowWrap: 'break-word' },
    h5: { overflowWrap: 'break-word' },
    h6: { overflowWrap: 'break-word' },
  });
};

export default reset;
