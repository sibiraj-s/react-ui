import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'styled-system/jsx';

import { Heading } from '../index';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
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

const ColorsTemplate = () => (
  <Stack gap='4'>
    <Heading level='1' color='accent'>
      h1: This is a primary color scheme heading level 1
    </Heading>
    <Heading level='2' color='secondary'>
      h2: This is a secondary color scheme heading level 2
    </Heading>
    <Heading level='3' color='success'>
      h3: This is a success color scheme heading level 3
    </Heading>
    <Heading level='4' color='danger'>
      h4: This is a danger color scheme heading level 4
    </Heading>
    <Heading level='5' color='muted'>
      h5: This is a muted color scheme heading level 5
    </Heading>
    <Heading level='6'>h6: This is a no color scheme heading level 6</Heading>
  </Stack>
);

export const Default: Story = {
  render: () => <Template />,
};

export const Colors: Story = {
  render: () => <ColorsTemplate />,
};
