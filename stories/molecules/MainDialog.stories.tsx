import type { Meta, StoryObj } from '@storybook/react';
import { MainDialog } from '@/components/molecules/MainDialog';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const StoreWrapper = (Story: React.ComponentType) => (
    <Provider store={store}>
        <Story />
    </Provider>
);

const meta: Meta<typeof MainDialog> = {
    title: 'Molecules/MainDialog',
    component: MainDialog,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A dialog that appears after clicking continue.',
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
    decorators: [StoreWrapper],
};

export default meta;
type Story = StoryObj<typeof MainDialog>;

export const Default: Story = {
    args: {
        size: 10,
    },
    render: (args) => (
        <div className="bg-secondaryDarkGray p-4 rounded-md">
            <MainDialog {...args} />
        </div>
    ),
};