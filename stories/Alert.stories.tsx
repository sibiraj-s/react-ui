import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert, Flex } from '../index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = () => (
  <Flex gap='md'>
    <Alert variant='primary'>
      This is a primary alert! It can have links inside it <a>Click Me!</a>
    </Alert>
    <Alert variant='secondary'>
      This is a secondary alert! It can have links inside it <a>Click Me!</a>
    </Alert>
    <Alert variant='success'>
      Success: This is a success alert! It can have links inside it <a>Click Me!</a>
    </Alert>
    <Alert variant='warning'>
      Warning: This is a warning alert! It can have links inside it <a>Click Me!</a>
    </Alert>
    <Alert variant='danger'>
      Danger: This is a danger alert! It can have links inside it <a>Click Me!</a>
    </Alert>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Alert';
