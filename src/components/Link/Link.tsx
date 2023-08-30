import { ComponentProps, ElementRef, forwardRef } from 'react';
import { useLink, AriaLinkOptions } from 'react-aria';

import useObjectRef from '@/hooks/use-object-ref';

type LinkElement = ElementRef<'a'>;
type LinkOwnProps = ComponentProps<'a'>;

type LinkProps = LinkOwnProps & AriaLinkOptions;

export const Link = forwardRef<LinkElement, LinkProps>((props, ref) => {
  const linkRef = useObjectRef(ref);
  const { linkProps } = useLink(props, linkRef);

  return <a {...props} {...linkProps} ref={linkRef} />;
});

Link.displayName = 'Link';

export default Link;
