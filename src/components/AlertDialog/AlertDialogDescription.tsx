import { FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import Text, { TextProps } from '../Text';

type AlertDialogDescriptionProps = TextProps;

const AlertDialogDescription: FC<AlertDialogDescriptionProps> = (props) => {
  return (
    <AlertDialogPrimitive.Description asChild>
      <Text {...props} />
    </AlertDialogPrimitive.Description>
  );
};

export default AlertDialogDescription;
