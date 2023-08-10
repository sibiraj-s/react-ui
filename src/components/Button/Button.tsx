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
  padding: '$1_5 $3',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',

  // variants
  variants: {
    variantType: {
      solid: {},
      outline: {
        '&:hover': {
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        padding: '$1 $2',
        borderRadius: '$roundedSm',
        fontSize: '$sm',
      },
      xs: {
        padding: '0 $1_5',
        borderRadius: '$roundedSm',
        fontSize: '$sm',
      },
    },
    variant: {
      primary: {
        color: '$white',
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
      variant: 'primary',
      variantType: 'outline',
      css: {
        backgroundColor: '$white',
        color: '$accentSolid',
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
      variant: 'secondary',
      variantType: 'outline',
      css: {
        backgroundColor: '$white',
        color: '$secondarySolid',
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
      variant: 'success',
      variantType: 'outline',
      css: {
        backgroundColor: '$white',
        color: '$successSolid',
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
      variant: 'danger',
      variantType: 'outline',
      css: {
        backgroundColor: '$white',
        color: '$dangerSolid',
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

type ButtonProps<T extends ElementType> = PolymorphicPropsWithoutRef<T, ButtonOwnProps>;
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
    <StyledButton
      {...mergeProps(buttonProps, focusProps, props as Record<string, unknown>)}
      isFocusVisible={isFocusVisible}
      ref={buttonRef}
    />
  );
};

export const Button = forwardRef(BaseButton) as ButtonComponent;
export default Button;
