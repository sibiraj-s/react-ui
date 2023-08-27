import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariantProps, cva, cx } from 'styled-system/css';

export const textStyle = cva({
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
      },
      xs: {
        fontSize: 'xs',
      },
      '1': {
        fontSize: '4xl',
      },
      '2': {
        fontSize: '3xl',
      },
      '3': {
        fontSize: '2xl',
      },
      '4': {
        fontSize: 'xl',
      },
      '5': {
        fontSize: 'lg',
      },
      '6': {
        fontSize: '$base',
      },
    },
    variant: {
      primary: {
        color: '$accentSolid',
      },
      secondary: {
        color: '$secondarySolid',
      },
      success: {
        color: '$successSolid',
      },
      danger: {
        color: '$dangerSolid',
      },
      muted: {
        color: '$muted',
      },
    },
    weight: {
      bold: {
        fontWeight: 'bold',
      },
    },
  },
});

type TextExtraProps = { asChild?: boolean };
type TextVariantProps = RecipeVariantProps<typeof textStyle>;
type TextOwnProps = TextVariantProps & ComponentProps<'p'> & TextExtraProps;

type TextElement = ElementRef<'p'>;
type TextProps = TextOwnProps;

export const Text = forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const { asChild, children, className, ...rest } = props;

  const [variantProps] = textStyle.splitVariantProps(props);
  const Component = asChild ? Slot : 'p';

  return (
    <Component className={cx(textStyle(variantProps), className)} {...rest} ref={forwardedRef}>
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default Text;
