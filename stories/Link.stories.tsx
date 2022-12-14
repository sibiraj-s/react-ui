import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    ...disableControls(['ref']),
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: 'Link',
  render: (args) => {
    return (
      <Link {...args} href='https://sibiraj.dev' target='_blank'>
        Click Me!
      </Link>
    );
  },
};
