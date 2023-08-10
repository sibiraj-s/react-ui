import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogTriggerElement = ElementRef<typeof AlertDialogPrimitive.Trigger>;
type AlertDialogTriggerProps = Omit<ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>, 'asChild'>;

const AlertDialogTrigger = forwardRef<AlertDialogTriggerElement, AlertDialogTriggerProps>((props, forwardedRef) => (
  <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));

AlertDialogTrigger.displayName = 'AlertDialogTrigger';

export default AlertDialogTrigger;
