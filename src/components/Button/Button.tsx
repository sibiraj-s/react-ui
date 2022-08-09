import { ElementType, forwardRef, ReactElement } from 'react';
import { useObjectRef } from '@react-aria/utils';
import { AriaButtonProps, useButton } from 'react-aria';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/types';

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

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonExtraProps = { css?: CSS };
type ButtonOwnProps = ButtonVariants & ButtonExtraProps;

type ButtonProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, ButtonOwnProps> & AriaButtonProps;

export const BaseButton = <T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  forwardedRef: PolymorphicRef<T>
) => {
  const ref = useObjectRef<PolymorphicRef<T>>(forwardedRef);
  const { buttonProps } = useButton(
    {
      ...props,
      elementType: props.as,
    },
    ref
  );

  return <StyledButton {...props} {...buttonProps} ref={ref} />;
};

type ButtonComponent = <T extends ElementType = 'button'>(props: ButtonProps<T>) => ReactElement<T>;
export const Button = forwardRef(BaseButton) as ButtonComponent;
export default Button;
