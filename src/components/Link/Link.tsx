import { ComponentProps, ElementRef, forwardRef } from 'react';
import { useLink, AriaLinkOptions } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import { styled } from 'styled-system/jsx';

export const StyledLink = styled('a', {
  base: {
    color: 'inherit',

    '&:focus-visible': {
      outline: 'none',
    },
  },
});

type LinkOwnProps = ComponentProps<typeof StyledLink>;

type LinkProps = LinkOwnProps & AriaLinkOptions;

export const Link = forwardRef<ElementRef<typeof StyledLink>, LinkProps>((props, ref) => {
  const linkRef = useObjectRef(ref);
  const { linkProps } = useLink(props, linkRef);

  return <StyledLink {...props} {...linkProps} ref={linkRef} />;
});

Link.displayName = 'Link';

export default Link;
