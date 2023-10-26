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
        <Button colorPalette='red'>Revoke Access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Stack gap='1'>
          <AlertDialogTitle level='5' mb='2'>
            Revoke access
          </AlertDialogTitle>
          <AlertDialogDescription size='sm'>
            Are you sure? this application will no longer be accessible and any existing sessions will be expired.
          </AlertDialogDescription>
          <HStack gap='2' justify='end' mt='4'>
            <AlertDialogCancel>
              <Button variant='outline' colorPalette='gray'>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button colorPalette='red'>Revoke access</Button>
            </AlertDialogAction>
          </HStack>
        </Stack>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
