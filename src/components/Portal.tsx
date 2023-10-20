import { Children, type PropsWithChildren, type RefObject } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  disabled?: boolean;
  container?: RefObject<HTMLElement>;
}

const isServer = typeof window === 'undefined';

export const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { children, container, disabled } = props;

  if (isServer || disabled) {
    return children;
  }

  const mountNode = container?.current ?? document.body;

  return Children.map(children, (child) => createPortal(child, mountNode));
};

export default Portal;
