import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';
import { alertDialogRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

const StyledAlertDialogOverlay = AlertDialogPrimitive.Overlay;

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>((props, ref) => {
  const adStyles = alertDialogRecipe();

  return (
    <StyledAlertDialogOverlay {...props} className={cx(adStyles.overaly, props.className)} ref={ref} asChild>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </StyledAlertDialogOverlay>
  );
});

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export default AlertDialogOverlay;
