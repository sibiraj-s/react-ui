import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { cva } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';
import rx from '@/utils/factory';

const buttonStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'md',
    gap: '2',
    fontWeight: 'semibold',
    py: '1.5',
    px: '3',
    userSelect: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'default',

    _focusVisible: {
      boxShadow: '0 0 0 2px var(--outline-shadowFrom), 0 0 0 4px var(--outline-shadowTo)',
    },
  },

  // variants
  variants: {
    variantType: {
      solid: {},
      outline: {
        _hover: {
          color: 'white',
        },
      },
    },
    size: {
      sm: {
        py: '1',
        px: '2',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
      xs: {
        py: '0',
        px: '1.5',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
    },
    variant: {
      primary: {
        color: 'white',
        backgroundColor: '$accentSolid',
        borderColor: '$accentSolid',
        '--outline-shadowFrom': 'colors.$accentBase',
        '--outline-shadowTo': 'colors.$accentSolid',

        _hover: {
          backgroundColor: '$accentSolidHover',
          borderColor: '$accentSolidHover',
        },

        _active: {
          backgroundColor: '$accentSolidHover',
          borderColor: '$accentSolidHover',
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: '$secondarySolid',
        borderColor: '$secondarySolid',
        '--outline-shadowFrom': 'colors.$secondaryBase',
        '--outline-shadowTo': 'colors.$secondarySolid',

        _hover: {
          backgroundColor: '$secondarySolidHover',
          borderColor: '$secondarySolidHover',
        },

        _active: {
          backgroundColor: '$secondarySolidHover',
          borderColor: '$secondarySolidHover',
        },
      },
      success: {
        color: 'white',
        backgroundColor: '$successSolid',
        borderColor: '$successSolid',
        '--outline-shadowFrom': 'colors.$successBase',
        '--outline-shadowTo': 'colors.$successSolid',

        _hover: {
          backgroundColor: '$successSolidHover',
          borderColor: '$successSolidHover',
        },

        _active: {
          backgroundColor: '$successSolidHover',
          borderColor: '$successSolidHover',
        },
      },
      danger: {
        color: 'white',
        backgroundColor: '$dangerSolid',
        borderColor: '$dangerSolid',
        '--outline-shadowFrom': 'colors.$dangerBase',
        '--outline-shadowTo': 'colors.$dangerSolid',

        _hover: {
          backgroundColor: '$dangerSolidHover',
          borderColor: '$dangerSolidHover',
        },

        _active: {
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
  ],

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

const StyledButton = styled(rx.button, buttonStyle);
type ButtonOwnProps = ComponentProps<typeof StyledButton>;

type ButtonElement = ElementRef<'button'>;
type ButtonProps = ButtonOwnProps & AriaButtonProps;

export const Button = forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const buttonRef = useObjectRef(forwardedRef);
  const { buttonProps } = useButton(props, buttonRef);

  return <StyledButton {...props} {...buttonProps} ref={buttonRef} />;
});

Button.displayName = 'Button';

export default Button;
