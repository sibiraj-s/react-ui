import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ElementRef, forwardRef } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';
import { RecipeVariantProps, cx, sva } from 'styled-system/css';
import { HTMLStyledProps, styled } from 'styled-system/jsx';

export const switchStyle = sva({
  slots: ['root', 'thumb'],
  base: {
    root: {
      display: 'flex',
      boxSizing: 'content-box',
      backgroundColor: 'neutral.bg',
      border: '1px solid token(colors.neutral.bg)',
      borderRadius: 'full',
      padding: '1px',
      color: 'primary',

      _checked: {
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    thumb: {
      height: '100%',
      aspectRatio: '1 / 1',
      backgroundColor: 'white',
      borderRadius: 'full',
      transition: 'transform 300ms',
      transform: 'translateX(0)',
      willChange: 'transform',

      _checked: {
        transform: 'translateX(100%)',
      },
    },
  },
  variants: {
    disabled: {
      true: {
        root: {
          opacity: 0.7,
          pointerEvents: 'none',
          borderColor: 'neutral.bg',
          backgroundColor: 'neutral.bg',
        },
      },
    },
    size: {
      regular: {
        root: {
          width: '10',
          height: '5',
        },
      },
      sm: {
        root: {
          width: '8',
          height: '4',
        },
      },
      lg: {
        root: {
          width: '12',
          height: '6',
        },
      },
    },
    isFocusVisible: {
      true: {
        root: {
          outlineOffset: '1px',
          outline: '2px solid currentColor',
        },
      },
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});

const SwitchRoot = styled(SwitchPrimitive.Root);
const SwitchThumb = SwitchPrimitive.Thumb;

type SwitchVariants = RecipeVariantProps<typeof switchStyle>;
type SwitchOwnProps = HTMLStyledProps<typeof SwitchRoot> & SwitchVariants;
type UserIgnoredProps = 'isFocusVisible';

type SwithElement = ElementRef<typeof SwitchRoot>;
type SwitchProps = Omit<SwitchOwnProps, UserIgnoredProps>;

export const Switch = forwardRef<SwithElement, SwitchProps>((props, ref) => {
  const { isFocusVisible, focusProps } = useFocusRing();

  const [variantProps, switchProps] = switchStyle.splitVariantProps(props);
  const switchClasses = switchStyle({ isFocusVisible, ...variantProps });

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
