import { defineSlotRecipe } from '@pandacss/dev';

const progressCircleRecipe = defineSlotRecipe({
  className: 'progress-cicle',
  description: 'The styles for the ProgressCircle component',
  slots: ['container', 'label', 'circle', 'progress'],
  base: {
    container: {
      position: 'relative',
      color: 'primary',
    },
    label: {
      position: 'absolute',
      height: 'full',
      width: 'full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 'calc(var(--rx-progress-circle-size) / 5)',
      fontWeight: 'semibold',
    },
    circle: {
      stroke: 'currentColor',
      strokeOpacity: 0.1,
      fill: 'transparent',
    },
    progress: {
      stroke: 'currentColor',
      fill: 'transparent',
    },
  },
});

export default progressCircleRecipe;
