import { FC, Ref } from 'react';
import { AriaSwitchProps, useSwitch } from '@react-aria/switch';
import { useFocusRing } from '@react-aria/focus';
import { ToggleProps, useToggleState } from '@react-stately/toggle';
import { cx } from 'styled-system/css';
import { HTMLStyledProps, VisuallyHidden, splitCssProps, styled } from 'styled-system/jsx';
import { SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes';
import { motion } from 'motion/react';

import { useObjectRef } from '@/hooks';

type SwitchOwnProps = HTMLStyledProps<'label'> & SwitchRecipeVariantProps & AriaSwitchProps & ToggleProps;
type UserIgnoredProps = 'isFocusVisible' | 'disabled';

type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps> & { ref?: Ref<HTMLInputElement> };

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Switch: FC<SwitchProps> = (props) => {
  const [cssProps, restProps] = splitCssProps(props);
  const [variantProps, switchRestProps] = switchRecipe.splitVariantProps(restProps);

  const state = useToggleState(switchRestProps);
  const ref = useObjectRef<HTMLInputElement>(props.ref);
  const { inputProps, isSelected, isDisabled } = useSwitch(switchRestProps, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const switchClasses = switchRecipe({ isFocusVisible, disabled: isDisabled, ...variantProps });

  return (
    <styled.label
      {...cssProps}
      className={cx(switchClasses.root, restProps.className)}
      data-state={isSelected ? 'checked' : 'unchecked'}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <motion.span className={switchClasses.thumb} layout transition={spring} />
      {props.children}
    </styled.label>
  );
};

export default Switch;
