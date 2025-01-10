import { ComponentPropsWithRef, FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogTriggerProps = Omit<ComponentPropsWithRef<typeof AlertDialogPrimitive.Trigger>, 'asChild'>;

const AlertDialogTrigger: FC<AlertDialogTriggerProps> = (props) => {
  return <AlertDialogPrimitive.Trigger {...props} asChild />;
};

export default AlertDialogTrigger;
