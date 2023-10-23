import { defineSlotRecipe } from '@pandacss/dev';

const alertDialogRecipe = defineSlotRecipe({
  className: 'alert-dialog',
  description: 'The styles for the AlertDialog components',
  slots: ['overaly', 'content', 'portal'],
  base: {
    overaly: {
      backgroundColor: 'color-mix(in srgb, white 40%, transparent)',
      position: 'fixed',
      inset: 0,
      backdropFilter: 'blur(4px)',
      zIndex: '$0.5',
    },
    portal: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      zIndex: '$1',
      backgroundColor: 'white',
      border: '1px solid token(colors.neutral.bgSubtle)',
      borderRadius: 'md',
      boxShadow: 'lg',
      position: 'fixed',
      width: '90vw',
      maxWidth: '32rem',
      padding: '4',
    },
  },
});

export default alertDialogRecipe;
