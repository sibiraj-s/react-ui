import { FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Heading, { HeadingProps } from '../Heading';

const AlertDialogTitle: FC<HeadingProps> = (props) => {
  return (
    <AlertDialogPrimitive.Title asChild>
      <Heading level={props.level} {...props} />
    </AlertDialogPrimitive.Title>
  );
};

export default AlertDialogTitle;
