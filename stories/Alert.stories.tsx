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
    <Alert variant='primary'>This is a primary alert! Check it out.</Alert>
    <Alert variant='secondary'>This is a secondary alert! Check it out.</Alert>
    <Alert variant='success'>Success: This is a success alert! Check it out.</Alert>
    <Alert variant='warning'>Warning: This is a warning alert! Check it out.</Alert>
    <Alert variant='danger'>Danger: This is a danger alert! Check it out.</Alert>
  </Flex>
);

export const Default: Story = {
  name: 'Alert',
  args: {},
  render: () => <Template />,
};
