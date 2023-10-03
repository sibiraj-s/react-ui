import type { Meta, StoryObj } from '@storybook/react';

import { DateField } from '../index';

const meta: Meta<typeof DateField> = {
  title: 'Components/Calendar/DateField',
  component: DateField,
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {
    label: 'DateField',
    granularity: 'day',
  },
};

export const WithGranularity: Story = {
  args: {
    label: 'DateField',
    granularity: 'second',
  },
  argTypes: {
    granularity: {
      options: ['day', 'hour', 'minute', 'second'],
      control: { type: 'select' },
    },
  },
};
