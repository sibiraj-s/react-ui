import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { splitCssProps, styled } from 'styled-system/jsx';
import { buttonRecipe, ButtonRecipeVariantProps } from 'styled-system/recipes';

import useObjectRef from '@/hooks/use-object-ref';
import rx from '@/utils/factory';

const StyledButton = styled(rx.button, buttonRecipe);
type ButtonOwnProps = ComponentProps<typeof StyledButton> & ButtonRecipeVariantProps;

type ButtonElement = ElementRef<typeof StyledButton>;
type ButtonProps = ButtonOwnProps & AriaButtonProps;

export const Button = forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const buttonRef = useObjectRef(forwardedRef);
  const [variantProps, { children, asChild, ...restProps }] = buttonRecipe.splitVariantProps(props);
  const [cssProps] = splitCssProps(restProps);

  const { buttonProps } = useButton(
    {
      ...props,
      isDisabled: props.disabled,
    },
    buttonRef
  );

  return (
    <StyledButton {...variantProps} {...cssProps} {...buttonProps} ref={buttonRef} asChild={asChild}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
