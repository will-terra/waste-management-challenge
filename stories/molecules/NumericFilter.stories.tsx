import type { Meta, StoryObj } from "@storybook/react";
import { SkipProperty } from "@/types/types";
import { NumericFilter } from "@/components/molecules/NumericFilter";
import { RadioItem } from "@/components/atoms/RadioItem";
import { RemoveButton } from "@/components/atoms/RemoveButton";

const meta: Meta<typeof NumericFilter> = {
  title: "Molecules/NumericFilter",
  component: NumericFilter,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A filter that allows the user to select between numeric options and returns a number as value.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2A2A2A" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NumericFilter>;

export const Default: Story = {
  args: {
    property: SkipProperty.HIRE_PERIOD_DAYS,
    ariaLabel: "Hire period days",
    selectedValue: null,
    onValueChange: (property, value) =>
      console.log(`Property: ${property}, Value: ${value}`),
  },
  render: (args) => (
    <div className="bg-secondaryDarkGray p-4 rounded-md">
      <NumericFilter {...args}>
        <RadioItem value={7} checked={args.selectedValue === 7} label="7" />
        <RadioItem value={14} checked={args.selectedValue === 14} label="14" />
        <RemoveButton onClick={() => console.log("Remove filter clicked")} />
      </NumericFilter>
    </div>
  ),
};

export const HirePeriodDays: Story = {
  args: {
    property: SkipProperty.HIRE_PERIOD_DAYS,
    ariaLabel: "Hire period days",
    selectedValue: 7,
    onValueChange: (property, value) =>
      console.log(`Property: ${property}, Value: ${value}`),
  },
  render: (args) => (
    <div className="bg-secondaryDarkGray p-4 rounded-md">
      <NumericFilter {...args}>
        <RadioItem value={7} checked={args.selectedValue === 7} label="7" />
        <RadioItem value={14} checked={args.selectedValue === 14} label="14" />
        <RemoveButton onClick={() => console.log("Remove filter clicked")} />
      </NumericFilter>
    </div>
  ),
};

export const TransportCost: Story = {
  args: {
    property: SkipProperty.TRANSPORT_COST,
    ariaLabel: "Transport cost",
    selectedValue: 0,
    onValueChange: (property, value) =>
      console.log(`Property: ${property}, Value: ${value}`),
  },
  render: (args) => (
    <div className="bg-secondaryDarkGray p-4 rounded-md">
      <NumericFilter {...args}>
        <RadioItem value={0} checked={args.selectedValue === 0} label="Free" />
        <RadioItem
          value={236}
          checked={args.selectedValue === 236}
          label="236"
        />
        <RemoveButton onClick={() => console.log("Remove filter clicked")} />
      </NumericFilter>
    </div>
  ),
};

export const PerTonneCost: Story = {
  args: {
    property: SkipProperty.PER_TONNE_COST,
    ariaLabel: "Per tonne cost",
    selectedValue: 236,
    onValueChange: (property, value) =>
      console.log(`Property: ${property}, Value: ${value}`),
  },
  render: (args) => (
    <div className="bg-secondaryDarkGray p-4 rounded-md">
      <NumericFilter {...args}>
        <RadioItem value={0} checked={args.selectedValue === 0} label="Free" />
        <RadioItem
          value={236}
          checked={args.selectedValue === 236}
          label="236"
        />
        <RemoveButton onClick={() => console.log("Remove filter clicked")} />
      </NumericFilter>
    </div>
  ),
};

export const MultipleOptions: Story = {
  args: {
    property: SkipProperty.HIRE_PERIOD_DAYS,
    ariaLabel: "Hire period days",
    selectedValue: 21,
    onValueChange: (property, value) =>
      console.log(`Property: ${property}, Value: ${value}`),
  },
  render: (args) => (
    <div className="bg-secondaryDarkGray p-4 rounded-md">
      <NumericFilter {...args}>
        <RadioItem value={7} checked={args.selectedValue === 7} label="7" />
        <RadioItem value={14} checked={args.selectedValue === 14} label="14" />
        <RadioItem value={21} checked={args.selectedValue === 21} label="21" />
        <RadioItem value={28} checked={args.selectedValue === 28} label="28" />
        <RemoveButton onClick={() => console.log("Remove filter clicked")} />
      </NumericFilter>
    </div>
  ),
};
