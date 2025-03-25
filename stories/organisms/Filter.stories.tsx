import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { Filter } from "@/components/organisms/Filter";
import skipsReducer from "@/lib/features/skips/skipsSlice";
import filterReducer from "@/lib/features/filter/filterSlice";

const store = configureStore({
    reducer: {
        skips: skipsReducer,
        filter: filterReducer,
    },
});

const StoreWrapper = (Story: React.ComponentType) => (
    <Provider store={store}>
        <Story />
    </Provider>
);

const meta: Meta<typeof Filter> = {
    title: "Organisms/Filter",
    component: Filter,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: 'The main Filter component that gather all properties and allow to filter by them.',
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
type Story = StoryObj<typeof Filter>;

export const Desktop: Story = {
    args: {
        isMobile: false,
    },
};

export const Mobile: Story = {
    args: {
        isMobile: true,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
