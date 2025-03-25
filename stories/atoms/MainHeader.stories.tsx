import type { Meta, StoryObj } from '@storybook/react';
import { MainHeader } from '@/components/atoms/MainHeader';

const meta: Meta<typeof MainHeader> = {
    title: 'Atoms/MainHeader',
    component: MainHeader,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A header component with static text, used in Product Grid.'
            },
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
type Story = StoryObj<typeof MainHeader>;

export const Default: Story = {};
