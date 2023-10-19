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
} from '../index';
import { HStack, Stack } from 'styled-system/jsx';

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
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger>
        <Button colorScheme='danger'>Revoke Access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Stack gap='1'>
          <AlertDialogTitle level='4'>Revoke access</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure? this application will no longer be accessible and any existing sessions will be expired.
          </AlertDialogDescription>
          <HStack gap='2' justify='end' mt='2'>
            <AlertDialogCancel>
              <Button colorScheme='secondary'>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button colorScheme='danger'>Revoke access</Button>
            </AlertDialogAction>
          </HStack>
        </Stack>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
