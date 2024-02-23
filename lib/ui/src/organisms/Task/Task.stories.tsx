import type { Meta, StoryObj } from '@storybook/react';
import { Task } from './Task';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Task> = {
  component: Task,
  title: 'Task',
};
export default meta;
type Story = StoryObj<typeof Task>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Task!/gi)).toBeTruthy();
  },
};
