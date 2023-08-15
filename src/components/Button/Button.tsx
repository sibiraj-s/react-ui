import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton, useFocusRing } from 'react-aria';
import { useObjectRef, mergeProps } from '@react-aria/utils';
import { Slot } from '@radix-ui/react-slot';

import { styled, VariantProps, CSS } from '../../stitches.config';

export const StyledButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  gap: '$2',
  borderRadius: '$rounded',
  fontWeight: '$semiBold',
  padding: '$1_5 $3',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'default',

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
        $$outlineShadowFrom: '$colors$accentBgSubtle',
        $$outlineShadowTo: '$colors$accentSolid',

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
        $$outlineShadowFrom: '$colors$secondaryBgSubtle',
        $$outlineShadowTo: '$colors$secondarySolid',

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
        $$outlineShadowFrom: '$colors$successBgSubtle',
        $$outlineShadowTo: '$colors$successSolid',

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
        $$outlineShadowFrom: '$colors$dangerBgSubtle',
        $$outlineShadowTo: '$colors$dangerSolid',

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
      variantType: 'outline',
      css: {
        color: '$accentSolid',
      },
    },
    {
      variant: 'secondary',
      variantType: 'outline',
      css: {
        color: '$secondarySolid',
      },
    },
    {
      variant: 'success',
      variantType: 'outline',
      css: {
        color: '$successSolid',
      },
    },
    {
      variant: 'danger',
      variantType: 'outline',
      css: {
        color: '$dangerSolid',
      },
    },
    {
      variantType: 'outline',
      css: {
        backgroundColor: 'transparent',
      },
    },
    {
      isFocusVisible: true,
      css: {
        boxShadow: '0 0 0 2px $$outlineShadowFrom, 0 0 0 4px $$outlineShadowTo',
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
type ButtonExtraProps = { css?: CSS; asChild?: boolean };
type ButtonOwnProps = Omit<ButtonVariants, UserIgnoredProps> & ButtonExtraProps;

type ButtonProps = AriaButtonProps & ComponentPropsWithoutRef<'button'> & ButtonOwnProps;

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>((props, forwardedRef) => {
  const { asChild, variant, variantType, size, css, children, ...rest } = props;

  const variantProps = { variant, variantType, size, css, disabled: props.disabled };
  const Comp = asChild ? Slot : 'button';

  const buttonRef = useObjectRef(forwardedRef);
  const { isFocusVisible, focusProps } = useFocusRing();

  const { buttonProps } = useButton(
    {
      ...rest,
      elementType: Comp,
    },
    buttonRef
  );

  return (
    <StyledButton
      {...mergeProps(buttonProps, focusProps, variantProps)}
      isFocusVisible={isFocusVisible}
      ref={buttonRef}
      as={Comp}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
