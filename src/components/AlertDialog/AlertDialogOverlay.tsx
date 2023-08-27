import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';
import { styled } from 'styled-system/jsx';

const StyledAlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  base: {
    backgroundColor: 'color-mix(in srgb, white 40%, transparent)',
    position: 'fixed',
    inset: 0,
    backdropFilter: 'blur(4px)',
    zIndex: '$0_5',
  },
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
