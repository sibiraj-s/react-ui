import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';
import { cx } from 'styled-system/css';
import { HTMLStyledProps, styled } from 'styled-system/jsx';
import { SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes';
import { motion } from 'framer-motion';

const SwitchRoot = styled(SwitchPrimitive.Root);
const SwitchThumb = SwitchPrimitive.Thumb;

type SwitchRootProps = Omit<HTMLStyledProps<typeof SwitchRoot>, keyof SwitchRecipeVariantProps>;
type SwitchOwnProps = SwitchRootProps & SwitchRecipeVariantProps;
type UserIgnoredProps = 'isFocusVisible';

type SwithElement = ElementRef<typeof SwitchRoot>;
type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Switch = forwardRef<SwithElement, SwitchProps>((props, ref) => {
  const [variantProps, switchRestProps] = switchRecipe.splitVariantProps(props);
  const { isFocusVisible, focusProps } = useFocusRing();

  const switchClasses = switchRecipe({ isFocusVisible, ...variantProps });

  return (
    <SwitchRoot
      className={cx(switchClasses.root, switchRestProps.className)}
      {...mergeProps(switchRestProps, focusProps)}
      ref={ref}
    >
      <SwitchThumb className={switchClasses.thumb} asChild>
        <motion.span layout transition={spring} />
      </SwitchThumb>
    </SwitchRoot>
  );
});

Switch.displayName = 'Switch';
export default Switch;
