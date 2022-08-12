import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert, styled } from '../index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const SwitchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '35rem',
});

const Template: ComponentStory<typeof Alert> = () => (
  <SwitchContainer>
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
  </SwitchContainer>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Alert';
