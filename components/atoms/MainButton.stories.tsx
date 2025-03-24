import type { Meta, StoryObj } from '@storybook/react';
import { MainButton } from './MainButton';

const meta = {
  title: "atoms/Main Button",
  component: MainButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable button that accepts a size and a variant options, and also custom TailwindCSS styles.'
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    },
    variant: {
      control: { type: 'select' },
      options: ['gray', 'blue']
    },
  }
} satisfies Meta<typeof MainButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Main Button",
    ariaLabel: "Main button",
    size: "large",
    variant: "gray",
  }
};

export const BlueLarge: Story = {
  args: {
    ...Default.args,
    variant: "blue",
    size: "large"
  }
};

export const GraySmall: Story = {
  args: {
    ...Default.args,
    variant: "gray",
    size: "small"
  }
};

export const BlueSmall: Story = {
  args: {
    ...Default.args,
    variant: "blue",
    size: "small"
  }
};
