import { ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Text, { TextProps } from '../Text';

type AlertDialogDescriptionElement = ElementRef<typeof Text>;
type AlertDialogDescriptionProps = TextProps;

const AlertDialogDescription = forwardRef<AlertDialogDescriptionElement, AlertDialogDescriptionProps>(
  (props, forwardedRef) => (
    <AlertDialogPrimitive.Description asChild>
      <Text {...props} ref={forwardedRef} />
    </AlertDialogPrimitive.Description>
  )
);

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

export default AlertDialogDescription;
