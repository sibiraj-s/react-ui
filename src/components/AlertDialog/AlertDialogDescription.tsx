import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Text from '../Text';

type AlertDialogDescriptionElement = HTMLParagraphElement;
type AlertDialogDescriptionProps = ComponentPropsWithoutRef<typeof Text>;
const AlertDialogDescription = forwardRef<AlertDialogDescriptionElement, AlertDialogDescriptionProps>(
  (props, forwardedRef) => (
    <AlertDialogPrimitive.Description asChild>
      <Text {...props} ref={forwardedRef} />
    </AlertDialogPrimitive.Description>
  )
);

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

export default AlertDialogDescription;
