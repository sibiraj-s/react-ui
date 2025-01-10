import { ComponentPropsWithRef, FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';
import { alertDialogRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

import AlertDialogPortal, { AlertDialogPortalProps } from './AlertDialogPortal';
import AlertDialogOverlay from './AlertDialogOverlay';

type AlertDialogContentProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Content> & {
  container?: AlertDialogPortalProps['container'];
};

const StyledAlertDialogContent = AlertDialogPrimitive.Content;

const AlertDialogContent: FC<AlertDialogContentProps> = (props) => {
  const { forceMount, container, children, ...contentProps } = props;

  const adStyles = alertDialogRecipe();

  return (
    <AlertDialogPortal container={container} forceMount={forceMount}>
      <AlertDialogOverlay />
      <StyledAlertDialogContent {...contentProps} className={cx(adStyles.content, contentProps.className)} asChild>
        <motion.div initial={{ scale: 0, opacity: 0.9 }} animate={{ scale: 1, opacity: 1 }}>
          {children}
        </motion.div>
      </StyledAlertDialogContent>
    </AlertDialogPortal>
  );
};

export default AlertDialogContent;
