import { styled } from '../../stitches.config';

const Button = styled('button', {
  border: '1px solid',
  borderRadius: '$rounded',
  fontWeight: '$bold',
  padding: '$buttonPaddingY $buttonPaddingX',

  // variants
  variants: {
    variant: {
      primary: {
        color: '$white', // TODO: implement with YIQ
        backgroundColor: '$accent',
        borderColor: '$accent',

        '&:hover': {
          backgroundColor: '$accentDark',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$secondary',
        borderColor: '$secondary',

        '&:hover': {
          backgroundColor: '$secondaryDark',
        },
      },
      success: {
        color: '$white',
        backgroundColor: '$success',
        borderColor: '$success',

        '&:hover': {
          backgroundColor: '$successDark',
        },
      },
      danger: {
        color: '$white',
        backgroundColor: '$danger',
        borderColor: '$danger',

        '&:hover': {
          backgroundColor: '$dangerDark',
        },
      },
    },
  },

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

Button.defaultProps = {
  type: 'button',
};

export default Button;
