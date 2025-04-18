import type { Meta, StoryObj } from "@storybook/react";
import { RemoveButton } from "@/components/atoms/RemoveButton";

const meta: Meta<typeof RemoveButton> = {
  title: "Atoms/RemoveButton",
  component: RemoveButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A main button with a trash icon, used to remove filters.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#121212" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof RemoveButton>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Remove button clicked"),
  },
};
