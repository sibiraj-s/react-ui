import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogCancelElement = ElementRef<typeof AlertDialogPrimitive.Cancel>;
type AlertDialogCancelProps = Omit<ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>, 'asChild'>;

const AlertDialogCancel = forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>((props, forwardedRef) => (
  <AlertDialogPrimitive.Cancel {...props} ref={forwardedRef} asChild />
));

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export default AlertDialogCancel;
