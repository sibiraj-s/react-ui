import { ComponentProps, ElementRef, forwardRef } from 'react';
import { useLink, AriaLinkOptions } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';

export const StyledLink = styled('a', {
  color: '$accentSolid',

  '&:focus': {
    outline: '$accentSolid auto 1px',
  },
});

type LinkVariants = VariantProps<typeof StyledLink>;
type LinkExtraProps = { css?: CSS };
type LinkOwnProps = LinkVariants & LinkExtraProps & ComponentProps<typeof StyledLink>;

type LinkProps = LinkOwnProps & AriaLinkOptions;

export const Link = forwardRef<ElementRef<typeof StyledLink>, LinkProps>((props, ref) => {
  const linkRef = useObjectRef(ref);
  const { linkProps } = useLink(props, linkRef);

  return <StyledLink {...props} {...linkProps} ref={linkRef} />;
});

Link.displayName = 'Link';

export default Link;
