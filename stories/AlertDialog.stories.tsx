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
        <Button>Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Stack gap='1'>
          <AlertDialogTitle level='5' mb='1'>
            Confirm Action
          </AlertDialogTitle>
          <AlertDialogDescription size='sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, erat quis finibus euismod, magna
            enim pulvinar risus, id maximus.
          </AlertDialogDescription>
          <HStack gap='2' justify='end' mt='4'>
            <AlertDialogCancel>
              <Button variant='outline' colorPalette='neutral'>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button>Yes. Go ahead!</Button>
            </AlertDialogAction>
          </HStack>
        </Stack>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
