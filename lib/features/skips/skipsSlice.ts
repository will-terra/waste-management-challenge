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
        allowed_on_road: boolean | null;
        allows_heavy_waste: boolean | null
    };
}

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        skips: [],
        filteredSkips: [],
        filters: {
            allowed_on_road: null,
            allows_heavy_waste: null
        },
        status: 'idle',
        error: undefined,
    } as skipsSliceState,
    reducers: (create) => ({
        filterByAllowedOnRoad: create.reducer((state, action: PayloadAction<boolean>) => {
            state.filters.allowed_on_road = action.payload;
            state.filteredSkips = state.skips.filter((skip) => skip.allowed_on_road === action.payload);
        }),
        filterByAllowsHeavyWaste: create.reducer((state, action: PayloadAction<boolean>) => {
            state.filters.allows_heavy_waste = action.payload;
            state.filteredSkips = state.skips.filter((skip) => skip.allows_heavy_waste === action.payload);
        }),
        handleFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters'], value: boolean }>) => {
            state.filters[action.payload.property] = action.payload.value;

        }),
        removeFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters'] }>) => {
            state.filters[action.payload.property] = null;
        }),
        applyFilters: create.reducer((state) => {
            state.filteredSkips = state.skips.filter((skip) => {
                return (state.filters.allowed_on_road === null || skip.allowed_on_road === state.filters.allowed_on_road) &&
                    (state.filters.allows_heavy_waste === null || skip.allows_heavy_waste === state.filters.allows_heavy_waste);
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

export const { handleFilter, removeFilter, applyFilters } = skipsSlice.actions;
export const { } = skipsSlice.selectors;
export default skipsSlice.reducer;