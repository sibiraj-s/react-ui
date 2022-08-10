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
  outline: 0,

  // variants
  variants: {
    variant: {
      primary: {
        color: '$white', // TODO: implement with YIQ
        backgroundColor: '$accentSolid',
        borderColor: '$accentSolid',

        '&:hover': {
          backgroundColor: '$accentSolidHover',
          borderColor: '$accentSolidHover',
        },

        '&:active': {
          backgroundColor: '$accentSolidHover',
          borderColor: '$accentSolidHover',
        },

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$accentBgActive',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$secondarySolid',
        borderColor: '$secondarySolid',

        '&:hover': {
          backgroundColor: '$secondarySolidHover',
          borderColor: '$secondarySolidHover',
        },

        '&:active': {
          backgroundColor: '$secondarySolidHover',
          borderColor: '$secondarySolidHover',
        },

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$secondaryBgActive',
        },
      },
      success: {
        color: '$white',
        backgroundColor: '$successSolid',
        borderColor: '$successSolid',

        '&:hover': {
          backgroundColor: '$successSolidHover',
          borderColor: '$successSolidHover',
        },

        '&:active': {
          backgroundColor: '$successSolidHover',
          borderColor: '$successSolidHover',
        },

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$successBgActive',
        },
      },
      danger: {
        color: '$white',
        backgroundColor: '$dangerSolid',
        borderColor: '$dangerSolid',

        '&:hover': {
          backgroundColor: '$dangerSolidHover',
          borderColor: '$dangerSolidHover',
        },

        '&:active': {
          backgroundColor: '$dangerSolidHover',
          borderColor: '$dangerSolidHover',
        },

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$dangerBgActive',
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
  const { buttonProps } = useButton(
    {
      ...props,
      elementType: props.as,
    },
    buttonRef
  );

  return <StyledButton {...mergeProps(buttonProps, props)} ref={buttonRef} />;
};

export const Button = forwardRef(BaseButton) as ButtonComponent;
export default Button;
