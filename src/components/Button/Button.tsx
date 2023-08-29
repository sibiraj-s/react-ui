import { ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton, useFocusRing } from 'react-aria';
import { useObjectRef, mergeProps } from '@react-aria/utils';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariantProps, cva, cx } from 'styled-system/css';
import { HTMLStyledProps } from 'styled-system/jsx';

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
        '--outline-shadowFrom': 'colors.$accentBgSubtle',
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
        '--outline-shadowFrom': 'colors.$secondaryBgSubtle',
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
        '--outline-shadowFrom': 'colors.$successBgSubtle',
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
        '--outline-shadowFrom': 'colors.$dangerBgSubtle',
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
    {
      isFocusVisible: true,
      css: {
        boxShadow: '0 0 0 2px var(--outline-shadowFrom), 0 0 0 4px var(--outline-shadowTo)',
      },
    },
  ],

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonVariantProps = RecipeVariantProps<typeof buttonStyle>;
type ButtonExtraProps = { asChild?: boolean };
type ButtonOwnProps = ButtonVariantProps & ButtonExtraProps & HTMLStyledProps<'button'>;

type ButtonElement = ElementRef<'button'>;
type ButtonProps = AriaButtonProps & ButtonOwnProps;

export const Button = forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const { asChild, children, className, ...rest } = props;

  const buttonRef = useObjectRef(forwardedRef);
  const { isFocusVisible, focusProps } = useFocusRing();

  const Component = asChild ? Slot : 'button';
  const [variantProps] = buttonStyle.splitVariantProps(props);

  const { buttonProps } = useButton(
    {
      ...rest,
      elementType: Component,
    },
    buttonRef
  );

  return (
    <Component
      className={cx(buttonStyle({ ...variantProps, isFocusVisible }), className)}
      {...mergeProps(buttonProps, focusProps)}
      ref={buttonRef}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
