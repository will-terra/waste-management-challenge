import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import skipsReducer from "@/lib/features/skips/skipsSlice";

const store = configureStore({
    reducer: {
        skips: skipsReducer,
    },
});

const StoreWrapper = (Story: React.ComponentType) => (
    <Provider store={store}>
        <Story />
    </Provider>
);

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
                { name: 'dark', value: '#2A2A2A' },
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
