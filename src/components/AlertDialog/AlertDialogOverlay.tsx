import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';

import { styled } from '../../stitches.config';

const StyledAlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$whiteA3',
  position: 'fixed',
  inset: 0,
  backdropFilter: 'blur(4px)',
  zIndex: 50,
});

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>((props, ref) => (
  <StyledAlertDialogOverlay {...props} ref={ref} asChild>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
  </StyledAlertDialogOverlay>
));

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export default AlertDialogOverlay;
