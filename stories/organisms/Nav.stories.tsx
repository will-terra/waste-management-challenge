import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from '@/components/organisms/Nav';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const createMockStore = (isMobile: boolean) => {
    return configureStore({
        reducer: {
            skips: (state = { isMobile }, action) => state
        }
    });
};

const meta: Meta<typeof Nav> = {
    title: 'Organisms/Nav',
    component: Nav,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A mock up Navbar.',
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#2A2A2A' },
            ],
        }

    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Desktop: Story = {
    decorators: [
        (Story) => (
            <Provider store={createMockStore(false)}>
                <Story />
            </Provider>
        ),
    ],
};

export const Mobile: Story = {
    decorators: [
        (Story) => (
            <Provider store={createMockStore(true)}>
                <Story />
            </Provider>
        ),
    ],
};
