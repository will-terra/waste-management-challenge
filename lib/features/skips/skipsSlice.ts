import { Skip } from "@/types/types";
import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchSkips } from "./skipsApiSlice";

interface skipsSliceState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
    skips: Skip[];
    filteredSkips: Skip[];
    filters: {
        boolean: {
            allowed_on_road: boolean | null;
            allows_heavy_waste: boolean | null;
        },
        numeric: {
            hire_period_days: number | null;
        };
    };
}

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        skips: [],
        filteredSkips: [],
        filters: {
            boolean: {
                allowed_on_road: null,
                allows_heavy_waste: null,
            },
            numeric: {
                hire_period_days: null,
            }
        },
        status: 'idle',
        error: undefined,
    } as skipsSliceState,
    reducers: (create) => ({
        handleBooleanFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['boolean'], value: boolean }>) => {
            if (action.payload.property in state.filters.boolean) {
                state.filters.boolean[action.payload.property] = action.payload.value;
            }
        }),
        handleNumericFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['numeric'], value: number }>) => {
            if (action.payload.property in state.filters.numeric) {
                state.filters.numeric[action.payload.property] = action.payload.value;

            }

        }),
        removeBooleanFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters']['boolean'] }>) => {
            if (action.payload.property in state.filters.boolean) {
                state.filters.boolean[action.payload.property] = null;
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

                return allowedOnRoadFilter && heavyWasteFilter && hirePeriodFilter;
            });
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

export const { handleBooleanFilter, handleNumericFilter, removeBooleanFilter, applyFilters } = skipsSlice.actions;
