import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef, ComponentProps } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';

import { styled, VariantProps, CSS } from '../../stitches.config';

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  $$switchWidth: '$sizes$10',
  $$switchHeight: '$sizes$5',
  $$thumbSize: '$$switchHeight',
  $$finalTranslatePos: 'calc($$switchWidth - $$switchHeight)',

  display: 'block',
  size: '$$thumbSize',
  backgroundColor: '$white',
  borderRadius: '$circle',
  transition: 'transform 100ms',
  transform: 'translateX(0)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX($$finalTranslatePos)',
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  position: 'relative',
  width: '$10',
  height: '$5',
  backgroundColor: '$neutralLine',
  borderRadius: '$pill',
  border: '1px solid',
  borderColor: '$neutralBorder',
  padding: '$px',

  variants: {
    disabled: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
        borderColor: '$neutralLine',
        backgroundColor: '$neutralBg',
      },
    },
    size: {
      sm: {
        width: '$8',
        height: '$4',

        [`${StyledThumb}`]: {
          $$switchWidth: '$sizes$8',
          $$switchHeight: '$sizes$4',
        },
      },
      lg: {
        width: '$12',
        height: '$6',

        [`${StyledThumb}`]: {
          $$switchWidth: '$sizes$12',
          $$switchHeight: '$sizes$6',
        },
      },
    },
    isFocusVisible: {
      true: {
        outlineOffset: '1px',
        outline: '2px solid $accentSolid',
      },
    },
  },

  '&[data-state="checked"]': {
    backgroundColor: '$accentSolid',
    borderColor: '$accentSolid',
  },
});

type UserIgnoredProps = 'isFocusVisible';
type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchExtraProps = { css?: CSS };
type SwitchOwnProps = Omit<SwitchVariants, UserIgnoredProps> & SwitchExtraProps;

type SwitchProps = SwitchOwnProps & ComponentProps<typeof StyledSwitch>;

export const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>((props, ref) => {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledSwitch {...mergeProps(props, focusProps)} isFocusVisible={isFocusVisible} ref={ref}>
      <StyledThumb />
    </StyledSwitch>
  );
});

Switch.displayName = 'Switch';
export default Switch;
