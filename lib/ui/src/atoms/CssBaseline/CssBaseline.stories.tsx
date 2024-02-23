import type { Meta, StoryObj } from '@storybook/react';
import { CssBaseline } from './CssBaseline';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CssBaseline> = {
  component: CssBaseline,
  title: 'CssBaseline',
};
export default meta;
type Story = StoryObj<typeof CssBaseline>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CssBaseline!/gi)).toBeTruthy();
  },
};
