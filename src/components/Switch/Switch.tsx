import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef, ComponentProps } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';
import { styled } from 'styled-system/jsx';

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  base: {
    height: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: 'white',
    borderRadius: 'full',
    transition: 'transform 300ms',
    transform: 'translateX(0)',
    willChange: 'transform',

    '&[data-state="checked"]': {
      transform: 'translateX(100%)',
    },
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  base: {
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    width: '10',
    height: '5',
    backgroundColor: 'neutral.bg',
    border: '1px solid token(colors.neutral.bg)',
    borderRadius: 'full',
    padding: '1px',
    color: 'accent',

    '&[data-state="checked"]': {
      backgroundColor: 'currentColor',
      borderColor: 'currentColor',
    },
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
        borderColor: 'neutral.bg',
        backgroundColor: 'neutral.bg',
      },
    },
    size: {
      sm: {
        width: '8',
        height: '4',
      },
      lg: {
        width: '12',
        height: '6',
      },
    },
    isFocusVisible: {
      true: {
        outlineOffset: '1px',
        outline: '2px solid currentColor',
      },
    },
  },
});

type UserIgnoredProps = 'isFocusVisible';
type SwitchVariants = ComponentProps<typeof StyledSwitch>;
type SwitchOwnProps = SwitchVariants;

type SwithElement = ElementRef<typeof StyledSwitch>;
type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

export const Switch = forwardRef<SwithElement, SwitchProps>((props, ref) => {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledSwitch {...mergeProps(props, focusProps)} isFocusVisible={isFocusVisible} ref={ref}>
      <StyledThumb />
    </StyledSwitch>
  );
});

Switch.displayName = 'Switch';
export default Switch;
