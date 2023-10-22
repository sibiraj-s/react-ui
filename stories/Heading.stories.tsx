import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'styled-system/jsx';

import { Heading } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    controls: {
      exclude: showOnlyControls([]),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

const Template = () => (
  <Stack gap='4'>
    <Heading level='1'>h1: This is a heading level 1</Heading>
    <Heading level='2'>h2: This is a heading level 2</Heading>
    <Heading level='3'>h3: This is a heading level 3</Heading>
    <Heading level='4'>h4: This is a heading level 4</Heading>
    <Heading level='5'>h5: This is a heading level 5</Heading>
    <Heading level='6'>h6: This is a heading level 6</Heading>
  </Stack>
);

export const Default: Story = {
  name: 'Heading',
  args: {},
  render: (args) => <Template {...args} />,
};
