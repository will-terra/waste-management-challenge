import { Skip } from "@/types/types";
import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchSkips } from "./skipsApiSlice";

interface skipsSliceState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
    skips: Skip[];
    filteredSkips: Skip[];
    isMobile: boolean;
    filters: {
        boolean: {
            allowed_on_road: boolean | null;
            allows_heavy_waste: boolean | null;
        },
        numeric: {
            hire_period_days: number | null;
            transport_cost: number | null;
            per_tonne_cost: number | null;
        };
        range: {
            price: number | [number, number];
        }
    };
}

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        skips: [],
        filteredSkips: [],
        isMobile: false,
        filters: {
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
        },
        status: 'idle',
        error: undefined,
    } as skipsSliceState,
    reducers: (create) => ({
        handleBooleanFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['boolean'], value: boolean | null }>) => {
            if (action.payload.property in state.filters.boolean) {
                state.filters.boolean[action.payload.property] = action.payload.value;
            }
        }),
        handleNumericFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['numeric'], value: number | null }>) => {
            if (action.payload.property in state.filters.numeric) {
                state.filters.numeric[action.payload.property] = action.payload.value;

            }

        }),
        handleRangeFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['range'], value: number | [number, number] }>) => {
            if (action.payload.property === 'price') {
                state.filters.range.price = action.payload.value;
            }
        }),
        applyFilters: create.reducer((state) => {
            state.filteredSkips = state.skips.filter((skip) => {
                const allowedOnRoadFilter = state.filters.boolean.allowed_on_road === null ||
                    skip.allowed_on_road === state.filters.boolean.allowed_on_road;

                const heavyWasteFilter = state.filters.boolean.allows_heavy_waste === null ||
                    skip.allows_heavy_waste === state.filters.boolean.allows_heavy_waste;

                const hirePeriodFilter = state.filters.numeric.hire_period_days === null ||
                    skip.hire_period_days === state.filters.numeric.hire_period_days;
                const transportCostFilter = state.filters.numeric.transport_cost === null ||
                    skip.transport_cost === state.filters.numeric.transport_cost;
                const perTonneCostFilter = state.filters.numeric.per_tonne_cost === null ||
                    skip.per_tonne_cost === state.filters.numeric.per_tonne_cost;
                const priceFilter = skip.price_before_vat !== null && Array.isArray(state.filters.range.price) ?
                    skip.price_before_vat >= state.filters.range.price[0] &&
                    skip.price_before_vat <= state.filters.range.price[1] : skip.price_before_vat === state.filters.range.price;
                return allowedOnRoadFilter && heavyWasteFilter && hirePeriodFilter && transportCostFilter && perTonneCostFilter && priceFilter;
            });
        }),
        setIsMobile: create.reducer((state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        })
    }),
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkips.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSkips.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.skips = action.payload;
                state.filteredSkips = action.payload;
            })
            .addCase(fetchSkips.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { handleBooleanFilter, handleNumericFilter, handleRangeFilter, applyFilters, setIsMobile } = skipsSlice.actions;
