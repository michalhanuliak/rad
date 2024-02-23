import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'Stack',
};
export default meta;
type Story = StoryObj<typeof Stack>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Stack!/gi)).toBeTruthy();
  },
};
