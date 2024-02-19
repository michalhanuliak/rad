import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Flex',
};
export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Flex!/gi)).toBeTruthy();
  },
};
