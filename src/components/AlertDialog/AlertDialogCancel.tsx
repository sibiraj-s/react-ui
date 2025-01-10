import { ComponentPropsWithRef, FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

type AlertDialogCancelProps = Omit<ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>, 'asChild'>;

const AlertDialogCancel: FC<AlertDialogCancelProps> = (props) => {
  return <AlertDialogPrimitive.Cancel {...props} asChild />;
};

export default AlertDialogCancel;
