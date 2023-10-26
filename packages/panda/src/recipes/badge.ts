import { defineRecipe } from '@pandacss/dev';

const badgeRecipe = defineRecipe({
  className: 'badge',
  description: 'The styles for the Badge components',
  base: {
    display: 'inline-block',
    border: '1px solid',
    borderRadius: 'sm',
    py: '0.5',
    px: '1.5',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontSize: 'xs',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    lineHeight: 'tight',
    minWidth: '10',
    userSelect: 'none',
    colorPalette: 'accent',
    color: 'colorPalette.50',
    backgroundColor: 'colorPalette.700',
    borderColor: 'colorPalette.700',
  },
});

export default badgeRecipe;
