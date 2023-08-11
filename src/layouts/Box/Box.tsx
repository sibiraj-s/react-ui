import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CSS, VariantProps, styled, utils } from '../../stitches.config';
import pick from '../../utils/pick';
import omit from '../../utils/omit';

const StyledBox = styled('div', {
  boxSizing: 'border-box',
});

const utilsKeys = Object.keys(utils) as unknown as Array<keyof typeof utils>;

type BoxElementType = ElementRef<typeof StyledBox>;
type BoxVariantProps = VariantProps<typeof StyledBox>;
type BoxOwnProps = ComponentPropsWithoutRef<typeof StyledBox>;
type CSSUtils = Pick<CSS, keyof typeof utils>;

type BoxExtraProps = CSSUtils & {
  css?: CSS;
};

type BoxProps = BoxVariantProps & BoxExtraProps & BoxOwnProps;
type ExtractCssPropsReturn<T extends BoxProps> = {
  css: Pick<T, keyof typeof utils>;
  rest: Omit<Partial<T>, keyof Pick<T, keyof typeof utils>>;
};

const extractCssProps = <T extends BoxProps>(props: T): ExtractCssPropsReturn<T> => {
  const css = pick(props, utilsKeys);
  const rest = omit(props, utilsKeys);
  return { css, rest };
};

export const Box = forwardRef<BoxElementType, BoxProps>((props, forwardedRef) => {
  const { css, rest } = extractCssProps(props);
  return <StyledBox {...rest} css={{ ...css, ...props.css }} ref={forwardedRef} />;
});

Box.displayName = 'Box';

export default Box;
