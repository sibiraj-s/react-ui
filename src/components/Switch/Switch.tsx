import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef, ComponentProps } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';

import { styled, VariantProps, CSS } from '../../stitches.config';

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  height: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: '$white',
  borderRadius: '$circle',
  transition: 'transform 300ms',
  transform: 'translateX(0)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(100%)',
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  width: '$10',
  height: '$5',
  backgroundColor: '$neutralLine',
  borderRadius: '$pill',
  border: '1px solid',
  borderColor: '$neutralBorder',
  boxSizing: 'content-box',
  padding: '$px',

  variants: {
    variant: {
      primary: {
        color: '$accentSolid',
      },
      danger: {
        color: '$dangerSolid',
      },
      success: {
        color: '$successSolid',
      },
    },
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
      },
      lg: {
        width: '$12',
        height: '$6',
      },
    },
    isFocusVisible: {
      true: {
        outlineOffset: '1px',
        outline: '2px solid currentColor',
      },
    },
  },

  '&[data-state="checked"]': {
    backgroundColor: 'currentColor',
    borderColor: 'currentColor',
  },

  defaultVariants: {
    variant: 'primary',
  },
});

type UserIgnoredProps = 'isFocusVisible';
type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchExtraProps = { css?: CSS };
type SwitchOwnProps = ComponentProps<typeof StyledSwitch> & SwitchVariants & SwitchExtraProps;

type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

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
