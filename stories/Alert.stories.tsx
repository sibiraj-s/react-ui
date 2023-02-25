import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Flex } from '../index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

const Template = () => (
  <Flex spacing='md' direction='c' css={{ maxWidth: '40%' }}>
    <Alert variant='primary'>Be the first to know! Get our latest updates.</Alert>
    <Alert variant='secondary'>You{"'"}re awesome! Keep taking care of yourself.</Alert>
    <Alert variant='success'>Woohoo! Task completed successfully.</Alert>
    <Alert variant='warning'>Hold on tight! Your account is about to expire.</Alert>
    <Alert variant='danger'>Uh oh! Something went wrong. Let{"'"}s fix it together.</Alert>
  </Flex>
);

export const Default: Story = {
  name: 'Alert',
  args: {},
  render: () => <Template />,
};
