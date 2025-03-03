import type { Meta, StoryObj } from '@storybook/react';
import { Box, styled } from 'styled-system/jsx';

import { AspectRatio } from '../index';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  name: 'AspectRatio',
  args: {},
  render: (args) => (
    <Box w='96' overflow='hidden' rounded='md' shadow='md' shadowColor='black'>
      <AspectRatio {...args} ratio={16 / 9}>
        <styled.img
          src='https://picsum.photos/seed/picsum/300/200'
          alt='City Night'
          h='full'
          w='full'
          objectFit='cover'
        />
      </AspectRatio>
    </Box>
  ),
};
