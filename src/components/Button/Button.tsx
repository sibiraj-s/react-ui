import { ElementRef, forwardRef } from 'react';
import { useButton, AriaButtonProps } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';

export const BaseButton = styled('button', {
  border: '1px solid',
  borderRadius: '$rounded',
  fontWeight: '$bold',
  padding: '$buttonPaddingY $buttonPaddingX',
  outline: 'none',

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

type ButtonVariants = VariantProps<typeof BaseButton>;
type ButtonProps = AriaButtonProps & ButtonVariants & { css?: CSS };

export const Button = forwardRef<ElementRef<typeof BaseButton>, ButtonProps>((props, forwardedRef) => {
  const ref = useObjectRef(forwardedRef);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <BaseButton {...buttonProps} {...props} ref={ref}>
      {children}
    </BaseButton>
  );
});

Button.displayName = 'Button';

export default Button;
