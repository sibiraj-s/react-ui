import type { Meta, StoryObj } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Flex,
} from '../index';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  argTypes: {},
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  name: 'AlertDialog',
  args: {},
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant='danger'>Revoke Access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Revoke access</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure? this application will no longer be accessible and any existing sessions will be expired.
        </AlertDialogDescription>
        <Flex gap='2' justify='end' mt='$4'>
          <AlertDialogCancel>
            <Button variant='secondary'>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button variant='danger'>Revoke access</Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
