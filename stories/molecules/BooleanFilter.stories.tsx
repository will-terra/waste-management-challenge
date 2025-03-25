import type { Meta, StoryObj } from '@storybook/react';
import { BooleanFilter } from '@/components/molecules/BooleanFilter';
import { RadioItem } from '@/components/atoms/RadioItem';
import { RemoveButton } from '@/components/atoms/RemoveButton';
import { SkipProperty } from '@/types/types';

const meta: Meta<typeof BooleanFilter> = {
    title: 'Molecules/BooleanFilter',
    component: BooleanFilter,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A filter that allows the user to select between two options and returns a boolean value.',
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#2A2A2A' },
            ],
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BooleanFilter>;

export const Default: Story = {
    args: {
        property: SkipProperty.ALLOWS_HEAVY_WASTE,
        ariaLabel: 'Allows heavy waste',
        selectedValue: null,
        onValueChange: (property, value) => console.log(`Property: ${property}, Value: ${value}`),
    },
    render: (args) => (
        <div className="bg-secondaryDarkGray p-4 rounded-md">
            <BooleanFilter {...args}>
                <RadioItem value={true} checked={args.selectedValue === true} label="Yes" />
                <RadioItem value={false} checked={args.selectedValue === false} label="No" />
                <RemoveButton onClick={() => console.log('Remove filter clicked')} />
            </BooleanFilter>
        </div>
    ),
};

export const AllowedOnRoad: Story = {
    args: {
        property: SkipProperty.ALLOWS_HEAVY_WASTE,
        ariaLabel: 'Allows heavy waste',
        selectedValue: true,
        onValueChange: (property, value) => console.log(`Property: ${property}, Value: ${value}`),
    },
    render: (args) => (
        <div className="bg-secondaryDarkGray p-4 rounded-md">
            <label className="text-2xl text-white font-bold"> Allowed On Road?</label>
            <BooleanFilter {...args}>
                <RadioItem value={true} checked={args.selectedValue === true} label="Yes" />
                <RadioItem value={false} checked={args.selectedValue === false} label="No" />
                <RemoveButton onClick={() => console.log('Remove filter clicked')} />
            </BooleanFilter>
        </div>
    ),
};

export const AllowsHeavyWaste: Story = {
    args: {
        property: SkipProperty.ALLOWS_HEAVY_WASTE,
        ariaLabel: 'Allows heavy waste',
        selectedValue: false,
        onValueChange: (property, value) => console.log(`Property: ${property}, Value: ${value}`),
    },
    render: (args) => (
        <div className="bg-secondaryDarkGray p-4 rounded-md gap-2">
            <label className="text-2xl text-white font-bold"> Allows heavy waste?</label>
            <BooleanFilter {...args}>
                <RadioItem value={true} checked={args.selectedValue === true} label="Yes" />
                <RadioItem value={false} checked={args.selectedValue === false} label="No" />
                <RemoveButton onClick={() => console.log('Remove filter clicked')} />
            </BooleanFilter>
        </div>
    ),
};