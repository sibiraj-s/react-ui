import { ElementType, forwardRef, ReactElement } from 'react';
import { useButton, useFocusRing } from 'react-aria';
import { useObjectRef, mergeProps } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { PolymorphicPropsWithoutRef, PolymorphicRef } from '../../utils/types';

export const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-block',
  border: '1px solid',
  borderRadius: '$rounded',
  fontWeight: '$bold',
  padding: '$buttonPaddingY $buttonPaddingX',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',

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
      },
    },
    isFocusVisible: {
      true: {},
    },
    disabled: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      isFocusVisible: true,
      css: {
        outline: '2px solid $accentSolid',
        outlineOffset: '2px',
      },
    },
    {
      variant: 'secondary',
      isFocusVisible: true,
      css: {
        outline: '2px solid $secondarySolid',
        outlineOffset: '2px',
      },
    },
    {
      variant: 'success',
      isFocusVisible: true,
      css: {
        outline: '2px solid $successSolid',
        outlineOffset: '2px',
      },
    },
    {
      variant: 'danger',
      isFocusVisible: true,
      css: {
        outline: '2px solid $dangerSolid',
        outlineOffset: '2px',
      },
    },
    {
      variant: 'primary',
      isFocusVisible: true,
      css: {
        outline: '2px solid $accentSolid',
        outlineOffset: '2px',
      },
    },
  ],

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

type UserIgnoredProps = 'isFocusVisible';
type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonExtraProps = { css?: CSS };
type ButtonOwnProps = Omit<ButtonVariants, UserIgnoredProps> & ButtonExtraProps;

type ButtonProps<T extends ElementType> = PolymorphicPropsWithoutRef<ButtonOwnProps, T>;
type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement<T>;

export const BaseButton = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: PolymorphicRef<T>) => {
  const buttonRef = useObjectRef<PolymorphicRef<T>>(ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const { buttonProps } = useButton(
    {
      ...props,
      elementType: props.as,
    },
    buttonRef
  );

  return (
    <StyledButton {...mergeProps(buttonProps, focusProps, props)} isFocusVisible={isFocusVisible} ref={buttonRef} />
  );
};

export const Button = forwardRef(BaseButton) as ButtonComponent;
export default Button;
