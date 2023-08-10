import { type FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { styled } from '../../stitches.config';

const StyledPortalContainer = styled('div', {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AlertDialogPortal: FC<AlertDialogPrimitive.AlertDialogPortalProps> = ({ children, ...props }) => (
  <AlertDialogPrimitive.Portal {...props}>
    <StyledPortalContainer>{children}</StyledPortalContainer>
  </AlertDialogPrimitive.Portal>
);

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

export default AlertDialogPortal;