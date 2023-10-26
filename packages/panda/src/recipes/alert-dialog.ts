import { defineSlotRecipe } from '@pandacss/dev';

const alertDialogRecipe = defineSlotRecipe({
  className: 'alert-dialog',
  description: 'The styles for the AlertDialog components',
  slots: ['overaly', 'content', 'portal'],
  base: {
    overaly: {
      '--ad-bg-color': 'white',
      backgroundColor: 'color-mix(in srgb, var(--ad-bg-color) 40%, transparent)',
      position: 'fixed',
      inset: 0,
      backdropFilter: 'blur(4px)',
      zIndex: '0',

      _dark: {
        '--ad-bg-color': 'black',
      },
    },
    portal: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      zIndex: '1',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'neutral.bgSubtle',
      borderRadius: 'md',
      boxShadow: 'lg',
      position: 'fixed',
      width: '90vw',
      maxWidth: '32rem',
      padding: '4',

      _dark: {
        backgroundColor: 'black',
        borderColor: 'neutral.solid',
      },
    },
  },
});

export default alertDialogRecipe;
