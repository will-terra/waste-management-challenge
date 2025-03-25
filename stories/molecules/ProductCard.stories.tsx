import { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "@/components/molecules/ProductCard";
import { StoreWrapper } from "../utils";


const meta: Meta<typeof ProductCard> = {
    title: "Molecules/ProductCard",
    component: ProductCard,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: 'A component that shows the product and its qualities.',
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#1C1C1C' },
            ],
        }
    },
    decorators: [StoreWrapper],
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const regularSkip = {
    size: 4,
    price_before_vat: 311,
    allowed_on_road: true,
    allows_heavy_waste: true,
};

const heavySkip = {
    size: 40,
    price_before_vat: 911,
    allowed_on_road: false,
    allows_heavy_waste: true,
};

const roadSkip = {
    size: 10,
    price_before_vat: 448,
    allowed_on_road: true,
    allows_heavy_waste: false,
};


export const AllowsHeavyWaste: Story = {
    args: {
        ...heavySkip,
    },
};

export const AllowedOnRoad: Story = {
    args: {
        ...roadSkip,
    },
};

export const AllowsHeavyWasteAndOnRoad: Story = {
    args: {
        ...regularSkip,
    },
};
