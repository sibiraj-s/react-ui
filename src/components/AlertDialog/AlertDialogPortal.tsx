import { type FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { alertDialogRecipe } from 'styled-system/recipes';

export type { AlertDialogPortalProps } from '@radix-ui/react-alert-dialog';

const AlertDialogPortal: FC<AlertDialogPrimitive.AlertDialogPortalProps> = ({ children, ...props }) => {
  const adStyles = alertDialogRecipe();

  return (
    <AlertDialogPrimitive.Portal {...props}>
      <div className={adStyles.portal}>{children}</div>
    </AlertDialogPrimitive.Portal>
  );
};

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

export default AlertDialogPortal;
