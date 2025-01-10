import { FC } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { motion } from 'framer-motion';
import { alertDialogRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

const StyledAlertDialogOverlay = AlertDialogPrimitive.Overlay;
type AlertDialogOverlayProps = AlertDialogPrimitive.AlertDialogOverlayProps;

const AlertDialogOverlay: FC<AlertDialogOverlayProps> = (props) => {
  const adStyles = alertDialogRecipe();

  return (
    <StyledAlertDialogOverlay {...props} className={cx(adStyles.overaly, props.className)} asChild>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </StyledAlertDialogOverlay>
  );
};

export default AlertDialogOverlay;
