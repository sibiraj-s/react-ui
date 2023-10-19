import { ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Heading, { HeadingProps } from '../Heading';

type AlertDialogTitleElement = ElementRef<typeof Heading>;
type AlertDialogTitleProps = HeadingProps;

const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  ({ level = '5', ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Title asChild>
      <Heading level={level} {...props} ref={forwardedRef} />
    </AlertDialogPrimitive.Title>
  )
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export default AlertDialogTitle;
