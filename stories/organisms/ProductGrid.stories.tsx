import { Meta, StoryObj } from "@storybook/react";
import { ProductGrid } from "@/components/organisms/ProductGrid";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import skipsReducer, { SkipsSliceState } from "@/lib/features/skips/skipsSlice";
import filterReducer, { FilterSliceState } from "@/lib/features/filter/filterSlice";
import { Skip } from "@/types/types";

const mockSkips: Skip[] = [
    {
        "id": 11554,
        "size": 4,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 311,
        "vat": 20,
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 11555,
        "size": 6,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 342,
        "vat": 20,
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 11556,
        "size": 8,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 420,
        "vat": 20,
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 11557,
        "size": 10,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 448,
        "vat": 20,
        "allowed_on_road": false,
        "allows_heavy_waste": false
    },
];

const defaultFilterState: FilterSliceState = {
    boolean: {
        allowed_on_road: null,
        allows_heavy_waste: null,
    },
    numeric: {
        hire_period_days: null,
        transport_cost: null,
        per_tonne_cost: null,
    },
    range: {
        price: [311, 944]
    }
};

const createMockStore = (initialState: { skips: SkipsSliceState; filter: FilterSliceState }) => {
    return configureStore({
        reducer: {
            skips: skipsReducer,
            filter: filterReducer
        },
        preloadedState: initialState
    });
};

const withReduxProvider = (store: any) => (Story: any) => (
    <Provider store={store}>
        <Story />
    </Provider>
);

const meta: Meta<typeof ProductGrid> = {
    title: 'Organisms/ProductGrid',
    component: ProductGrid,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'The component where all the products are shown, it also handles error messages.',
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#1C1C1C' },
            ],
        }
    },
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof ProductGrid>;


export const WithData: Story = {
    decorators: [
        withReduxProvider(createMockStore({
            skips: {
                status: 'succeeded',
                error: undefined,
                skips: mockSkips,
                filteredSkips: mockSkips,
                selectedSkip: null,
                isMobile: true,
            },
            filter: defaultFilterState
        }))
    ],
};

export const ErrorOnFetch: Story = {
    decorators: [
        withReduxProvider(createMockStore({
            skips: {
                status: 'failed',
                error: 'Erro ao carregar dados',
                skips: [],
                filteredSkips: [],
                selectedSkip: null,
                isMobile: true,
            },
            filter: defaultFilterState
        }))
    ],
};

export const EmptyState: Story = {
    decorators: [
        withReduxProvider(createMockStore({
            skips: {
                status: 'succeeded',
                error: undefined,
                skips: [],
                filteredSkips: [],
                selectedSkip: null,
                isMobile: true,
            },
            filter: defaultFilterState
        }))
    ],
};
