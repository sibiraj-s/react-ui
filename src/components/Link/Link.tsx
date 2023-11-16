import { ElementRef, forwardRef } from 'react';
import { useLink, AriaLinkOptions } from '@react-aria/link';
import useObjectRef from '@/hooks/use-object-ref';
import { HTMLStyledProps } from 'styled-system/types';
import { styled } from 'styled-system/jsx';

type LinkElement = ElementRef<'a'>;
type LinkOwnProps = HTMLStyledProps<'a'>;

type LinkProps = LinkOwnProps & AriaLinkOptions;

export const Link = forwardRef<LinkElement, LinkProps>((props, ref) => {
  const linkRef = useObjectRef(ref);
  const { linkProps } = useLink(props, linkRef);

  return <styled.a {...props} {...linkProps} ref={linkRef} />;
});

Link.displayName = 'Link';

export default Link;
