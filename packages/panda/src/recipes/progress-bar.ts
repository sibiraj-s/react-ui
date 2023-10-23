import { defineSlotRecipe } from '@pandacss/dev';

const progressBarRecipe = defineSlotRecipe({
  className: 'progress-bar',
  description: 'The styles for the ProgressBar component',
  slots: ['container', 'filing'],
  base: {
    container: {
      width: '100%',
      border: '1px solid',
      height: '1.5rem',
      borderRadius: 'md',
      overflow: 'hidden',
      borderColor: 'currentcolor',
      color: 'primary',
    },
    filing: {
      backgroundColor: 'currentColor',
      height: '100%',
    },
  },
  variants: {
    animated: {
      true: {},
    },
    striped: {
      true: {
        filing: {
          backgroundImage:
            'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
          backgroundSize: '1rem 1rem',
        },
      },
    },
  },
  compoundVariants: [
    {
      striped: true,
      animated: true,
      css: {
        filing: {
          animation: `stripedBg 1s linear infinite`,
        },
      },
    },
  ],
});

export default progressBarRecipe;
