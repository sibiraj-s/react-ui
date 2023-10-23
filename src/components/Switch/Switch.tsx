import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';

import { cx } from 'styled-system/css';
import { HTMLStyledProps, styled } from 'styled-system/jsx';
import { SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes';

const SwitchRoot = styled(SwitchPrimitive.Root);
const SwitchThumb = SwitchPrimitive.Thumb;

type SwitchRootProps = Omit<HTMLStyledProps<typeof SwitchRoot>, keyof SwitchRecipeVariantProps>;
type SwitchOwnProps = SwitchRootProps & SwitchRecipeVariantProps;
type UserIgnoredProps = 'isFocusVisible';

type SwithElement = ElementRef<typeof SwitchRoot>;
type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

export const Switch = forwardRef<SwithElement, SwitchProps>((props, ref) => {
  const { isFocusVisible, focusProps } = useFocusRing();

  const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
  const switchClasses = switchRecipe({ isFocusVisible, ...variantProps });

  return (
    <SwitchRoot
      className={cx(switchClasses.root, switchProps.className)}
      {...mergeProps(switchProps, focusProps)}
      ref={ref}
    >
      <SwitchThumb className={switchClasses.thumb} />
    </SwitchRoot>
  );
});

Switch.displayName = 'Switch';
export default Switch;
