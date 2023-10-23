import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { styled } from 'styled-system/jsx';
import { buttonRecipe, ButtonRecipeVariantProps } from 'styled-system/recipes';

import useObjectRef from '@/hooks/use-object-ref';
import rx from '@/utils/factory';

const StyledButton = styled(rx.button, buttonRecipe);
type ButtonOwnProps = ComponentProps<typeof StyledButton> & ButtonRecipeVariantProps;

type ButtonElement = ElementRef<typeof StyledButton>;
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
