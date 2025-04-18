import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "@/components/atoms/Message";
import { StoreWrapper } from "../utils";

const meta: Meta<typeof Message> = {
  title: "Atoms/Message",
  component: Message,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A message component that accepts a title and a subtitle, used to show errors.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1C1C1C" }],
    },
  },

  tags: ["autodocs"],
  decorators: [StoreWrapper],
};

export default meta;
type Story = StoryObj<typeof Message>;

export const FetchError: Story = {
  args: {
    title: "Error on fetching skips :(",
    subtitle: "Try reloading the page",
  },
};

export const NoResults: Story = {
  args: {
    title: "Ooops, no skips found :(",
    subtitle: "Try using less filters",
  },
};
