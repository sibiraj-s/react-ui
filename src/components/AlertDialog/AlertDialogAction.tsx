import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogActionElement = ElementRef<typeof AlertDialogPrimitive.Action>;
type AlertDialogActionProps = Omit<ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>, 'asChild'>;

const AlertDialogAction = forwardRef<AlertDialogActionElement, AlertDialogActionProps>((props, forwardedRef) => (
  <AlertDialogPrimitive.Action {...props} ref={forwardedRef} asChild />
));

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export default AlertDialogAction;
