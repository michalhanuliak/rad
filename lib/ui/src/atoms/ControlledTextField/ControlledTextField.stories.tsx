import type { Meta, StoryObj } from '@storybook/react';
import { ControlledTextField } from './ControlledTextField';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ControlledTextField> = {
  component: ControlledTextField,
  title: 'ControlledTextField',
};
export default meta;
type Story = StoryObj<typeof ControlledTextField>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ControlledTextField!/gi)).toBeTruthy();
  },
};
