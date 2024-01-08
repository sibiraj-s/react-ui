import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog, Button } from '../index';
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
      <AlertDialog.Trigger>
        <Button>Open Alert Dialog</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <Stack gap='1'>
          <AlertDialog.Title level='5' mb='1'>
            Confirm Action
          </AlertDialog.Title>
          <AlertDialog.Description size='sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, erat quis finibus euismod, magna
            enim pulvinar risus, id maximus.
          </AlertDialog.Description>
          <HStack gap='2' justify='end' mt='4'>
            <AlertDialog.Cancel>
              <Button variant='outline' colorPalette='gray'>
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button>Yes. Go ahead!</Button>
            </AlertDialog.Action>
          </HStack>
        </Stack>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};
