import { ComponentProps, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';

import { styled } from '../../stitches.config';
import AlertDialogPortal from './AlertDialogPortal';
import AlertDialogOverlay from './AlertDialogOverlay';

type AlertDialogContentElement = ElementRef<typeof AlertDialogPrimitive.Content>;

interface AlertDialogContentProps extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
  container?: ComponentProps<typeof AlertDialogPortal>['container'];
}

const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content, {
  zIndex: 100,
  backgroundColor: 'white',
  borderRadius: '$roundedSm',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  width: '90vw',
  maxWidth: '32rem',
  padding: '$4',
});

const AlertDialogContent = forwardRef<AlertDialogContentElement, AlertDialogContentProps>((props, forwardedRef) => {
  const { forceMount, container, children, ...contentProps } = props;

  return (
    <AlertDialogPortal container={container} forceMount={forceMount}>
      <AlertDialogOverlay />
      <StyledAlertDialogContent {...contentProps} ref={forwardedRef} asChild>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          {children}
        </motion.div>
      </StyledAlertDialogContent>
    </AlertDialogPortal>
  );
});

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

export default AlertDialogContent;
