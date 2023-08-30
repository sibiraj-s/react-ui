import { ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Heading, { HeadingProps } from '../Heading';

type AlertDialogTitleElement = ElementRef<typeof Heading>;
type AlertDialogTitleProps = HeadingProps;

const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  ({ size = '5', ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Title asChild>
      <Heading size={size} {...props} ref={forwardedRef} />
    </AlertDialogPrimitive.Title>
  )
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export default AlertDialogTitle;
