import { ElementType, forwardRef, ReactElement } from 'react';
import { useButton } from 'react-aria';
import { useObjectRef, mergeProps } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { PolymorphicPropsWithoutRef, PolymorphicRef } from '../../utils/types';

export const StyledButton = styled('button', {
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
          borderColor: '$accentDark',
        },

        '&:active': {
          backgroundColor: '$accentDark',
          borderColor: '$accentDark',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$accentDarker, 0 0 0 1px $colors$accentDarker',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$secondary',
        borderColor: '$secondary',

        '&:hover': {
          backgroundColor: '$secondaryDark',
          borderColor: '$secondaryDark',
        },

        '&:active': {
          backgroundColor: '$secondaryDark',
          borderColor: '$secondaryDark',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$secondaryDarker, 0 0 0 1px $colors$secondaryDarker',
        },
      },
      success: {
        color: '$white',
        backgroundColor: '$success',
        borderColor: '$success',

        '&:hover': {
          backgroundColor: '$successDark',
          borderColor: '$successDark',
        },

        '&:active': {
          backgroundColor: '$successDark',
          borderColor: '$successDark',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$successDarker, 0 0 0 1px $colors$successDarker',
        },
      },
      danger: {
        color: '$white',
        backgroundColor: '$danger',
        borderColor: '$danger',

        '&:hover': {
          backgroundColor: '$dangerDark',
          borderColor: '$dangerDark',
        },

        '&:active': {
          backgroundColor: '$dangerDark',
          borderColor: '$dangerDark',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$dangerDarker, 0 0 0 1px $colors$dangerDarker',
        },
      },
    },
  },

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonExtraProps = { css?: CSS };
type ButtonOwnProps = ButtonVariants & ButtonExtraProps;

type ButtonProps<T extends ElementType> = PolymorphicPropsWithoutRef<ButtonOwnProps, T>;
type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement<T>;

export const BaseButton = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: PolymorphicRef<T>) => {
  const buttonRef = useObjectRef<PolymorphicRef<T>>(ref);
  const { buttonProps } = useButton(props, buttonRef);

  return <StyledButton {...mergeProps(buttonProps, props)} ref={buttonRef} />;
};

export const Button = forwardRef(BaseButton) as ButtonComponent;
export default Button;
