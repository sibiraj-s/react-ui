import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { cva } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';
import rx from '@/utils/factory';

export const buttonStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid token(colors.neutral.textContrast)',
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
    lineHeight: 'snug',

    _focusVisible: {
      boxShadow: '0 0 0 2px var(--outline-shadowFrom), 0 0 0 4px var(--outline-shadowTo)',
    },

    _disabled: {
      opacity: 0.7,
      pointerEvents: 'none',
    },
  },

  // variants
  variants: {
    variant: {
      solid: {
        color: 'white',
        backgroundColor: 'colorPalette.solid',
        borderColor: 'colorPalette.solid',
        '--outline-shadowFrom': 'colors.colorPalette.base',
        '--outline-shadowTo': 'colors.colorPalette.solid',

        _hover: {
          backgroundColor: 'colorPalette.solidHover',
          borderColor: 'colorPalette.solidHover',
        },

        _active: {
          backgroundColor: 'colorPalette.solidHover',
          borderColor: 'colorPalette.solidHover',
        },
      },
      outline: {
        borderColor: 'colorPalette.solid',
        color: 'colorPalette.solid',
        backgroundColor: 'transparent',

        _hover: {
          color: 'white',
          backgroundColor: 'colorPalette.solid',
        },
      },
    },
    size: {
      xs: {
        py: '0',
        px: '1.5',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
      sm: {
        py: '1',
        px: '2',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
      regular: {},
    },
    colorScheme: {
      primary: {
        colorPalette: 'primary',
      },
      secondary: {
        colorPalette: 'secondary',
      },
      success: {
        colorPalette: 'success',
      },
      danger: {
        colorPalette: 'danger',
      },
    },
  },

  // defaults
  defaultVariants: {
    variant: 'solid',
    colorScheme: 'primary',
  },
});

const StyledButton = styled(rx.button, buttonStyle);
type ButtonOwnProps = ComponentProps<typeof StyledButton>;

type ButtonElement = ElementRef<'button'>;
type ButtonProps = ButtonOwnProps & AriaButtonProps;

export const Button = forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const buttonRef = useObjectRef(forwardedRef);
  const { buttonProps } = useButton(
    {
      ...props,
      isDisabled: props.disabled,
    },
    buttonRef
  );

  return <StyledButton {...props} {...buttonProps} ref={buttonRef} />;
});

Button.displayName = 'Button';

export default Button;
