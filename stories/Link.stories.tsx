import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '../index';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} href='ggogle'>
    Click Me!
  </Link>
);

export const Default = Template.bind({});
Default.storyName = 'Link';
Default.args = {};
