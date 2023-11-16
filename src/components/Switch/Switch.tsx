import { forwardRef } from 'react';
import { SwitchAria, useFocusRing, useSwitch } from 'react-aria';
import { ToggleProps, useToggleState } from 'react-stately';
import { cx } from 'styled-system/css';
import { HTMLStyledProps, VisuallyHidden, splitCssProps, styled } from 'styled-system/jsx';
import { SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes';
import { motion } from 'framer-motion';

import { useObjectRef } from '@/hooks';

type SwitchOwnProps = HTMLStyledProps<'label'> & SwitchRecipeVariantProps & SwitchAria & ToggleProps;
type UserIgnoredProps = 'isFocusVisible' | 'disabled';

type SwithElement = HTMLInputElement;
type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Switch = forwardRef<SwithElement, SwitchProps>((props, forwardedRef) => {
  const [cssProps, restProps] = splitCssProps(props);
  const [variantProps, switchRestProps] = switchRecipe.splitVariantProps(restProps);

  const state = useToggleState(switchRestProps);
  const ref = useObjectRef<HTMLInputElement>(forwardedRef);
  const { inputProps, isSelected, isDisabled } = useSwitch(switchRestProps, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const switchClasses = switchRecipe({ isFocusVisible, disabled: isDisabled, ...variantProps });

  return (
    <styled.label
      {...cssProps}
      className={cx(switchClasses.root, cssProps.className)}
      data-state={isSelected ? 'checked' : 'unchecked'}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <motion.span className={switchClasses.thumb} layout transition={spring} />
      {props.children}
    </styled.label>
  );
});

Switch.displayName = 'Switch';
export default Switch;
