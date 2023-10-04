import type { Meta, StoryObj } from '@storybook/react';

import { TimeField } from '../index';

const meta: Meta<typeof TimeField> = {
  title: 'Components/Date and Time/TimeField',
  component: TimeField,
};

export default meta;
type Story = StoryObj<typeof TimeField>;

export const Default: Story = {
  args: {
    label: 'TimeField',
  },
};

export const WithHourCycle: Story = {
  args: {
    label: 'With HourCycle',
    hourCycle: 12,
  },
  argTypes: {
    hourCycle: {
      options: [12, 24],
      control: { type: 'radio' },
    },
  },
};
