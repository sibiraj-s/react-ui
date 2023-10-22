import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../index';

const meta: Meta<typeof Link> = {
  title: 'Components/Navigation/Link',
  component: Link,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: 'Link',
  args: {
    children: 'Click Me',
  },
  render: (args) => {
    return <Link {...args} href='https://sibiraj.dev' target='_blank' />;
  },
};
