import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { Heading } from '../index';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

const Template = () => (
  <Fragment>
    <Heading size='1'>h1: This is a heading level 1</Heading>
    <Heading size='2'>h2: This is a heading level 2</Heading>
    <Heading size='3'>h3: This is a heading level 3</Heading>
    <Heading size='4'>h4: This is a heading level 4</Heading>
    <Heading size='5'>h5: This is a heading level 5</Heading>
    <Heading size='6'>h6: This is a heading level 6</Heading>
  </Fragment>
);

const VariantsTemplate = () => (
  <Fragment>
    <Heading size='1' variant='primary'>
      h1: This is a primary variant heading level 1
    </Heading>
    <Heading size='2' variant='secondary'>
      h2: This is a secondary variant heading level 2
    </Heading>
    <Heading size='3' variant='success'>
      h3: This is a success variant heading level 3
    </Heading>
    <Heading size='4' variant='danger'>
      h4: This is a danger variant heading level 4
    </Heading>
    <Heading size='5' variant='muted'>
      h5: This is a muted variant heading level 5
    </Heading>
    <Heading size='6'>h6: This is a no variant heading level 6</Heading>
  </Fragment>
);

export const Default: Story = {
  render: () => <Template />,
};

export const Variants: Story = {
  render: () => <VariantsTemplate />,
};
