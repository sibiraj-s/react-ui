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
    backgroundColor: '$neutralBg',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$neutralBg',
    borderRadius: 'full',
    padding: '1px',

    '&[data-state="checked"]': {
      backgroundColor: 'currentColor',
      borderColor: 'currentColor',
    },
  },

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

  defaultVariants: {
    variant: 'primary',
  },
});

type UserIgnoredProps = 'isFocusVisible';
type SwitchVariants = ComponentProps<typeof StyledSwitch>;
type SwitchOwnProps = ComponentProps<typeof StyledSwitch> & SwitchVariants;

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
