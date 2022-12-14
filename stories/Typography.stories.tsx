import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { Heading, Text } from '../index';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Typography',
  argTypes: {},
};

export default meta;
type Story = StoryObj;

const Template = () => (
  <Fragment>
    <Heading size='1'>h1: This is a heading level 1</Heading>
    <Heading size='2'>h2: This is a heading level 2</Heading>
    <Heading size='3'>h3: This is a heading level 3</Heading>
    <Heading size='4'>h4: This is a heading level 4</Heading>
    <Heading size='5'>h5: This is a heading level 5</Heading>
    <Heading size='6'>h6: This is a heading level 6</Heading>
    <Text>
      p: This is a Paragraph size 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
  </Fragment>
);

export const Default: Story = {
  name: 'Typography',
  args: {},
  render: () => <Template />,
};
