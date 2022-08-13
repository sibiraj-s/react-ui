import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fragment } from 'react';

import { Heading, Text } from '../index';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
  subcomponents: {
    Text,
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = () => (
  <Fragment>
    <Heading size='1'>h1: This is a heading level 1</Heading>
    <Heading size='2'>h2: This is a heading level 2</Heading>
    <Heading size='3'>h3: This is a heading level 3</Heading>
    <Heading size='4'>h4: This is a heading level 4</Heading>
    <Heading size='5'>h5: This is a heading level 5</Heading>
    <Heading size='6'>h6: This is a heading level 6</Heading>
    <Text>p: This is a regular text</Text>
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

export const Default = Template.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Default.args = {};
