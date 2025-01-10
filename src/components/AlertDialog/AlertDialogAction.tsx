import { ComponentPropsWithRef, FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogActionProps = Omit<ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>, 'asChild'>;

const AlertDialogAction: FC<AlertDialogActionProps> = (props) => {
  return <AlertDialogPrimitive.Action {...props} asChild />;
};

export default AlertDialogAction;
