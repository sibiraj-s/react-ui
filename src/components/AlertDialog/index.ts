import AlertDialogRoot from './AlertDialog';
import AlertDialogTrigger from './AlertDialogTrigger';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogTitle from './AlertDialogTitle';
import AlertDialogDescription from './AlertDialogDescription';
import AlertDialogCancel from './AlertDialogCancel';
import AlertDialogAction from './AlertDialogAction';

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
});

export default AlertDialog;
