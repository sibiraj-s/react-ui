import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Heading from '../Heading';

type AlertDialogTitleElement = ElementRef<typeof Heading>;
type AlertDialogTitleProps = ComponentPropsWithoutRef<typeof Heading>;

const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  ({ size = '5', ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Title asChild>
      <Heading size={size} {...props} ref={forwardedRef} />
    </AlertDialogPrimitive.Title>
  )
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export default AlertDialogTitle;
