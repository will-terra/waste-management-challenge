import { Skip } from "@/app/types/types";
import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchSkips } from "./skipsApiSlice";
import { stat } from "fs";

interface skipsSliceState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
    skips: Skip[];
    filteredSkips: Skip[];
    filters: { allowedOnRoad: boolean | null; }
}

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        skips: [],
        filteredSkips: [],
        filters: { allowedOnRoad: null },
        status: 'idle',
        error: undefined,
    } as skipsSliceState,
    reducers: (create) => ({
        filterByAllowedOnRoad: create.reducer((state, action: PayloadAction<string>) => {
            const booleanValue = action.payload === "yes" ? true : false;
            state.filteredSkips = state.skips.filter((skip) => skip.allowed_on_road === booleanValue);
        }),
        addRadioFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters'], value: boolean }>) => {
            state.filters[action.payload.property] = action.payload.value;
            state.filteredSkips = state.skips.filter((skip) => skip.allowed_on_road === state.filters.allowedOnRoad);
        }),
        removeRadioFilter: create.reducer((state, action: PayloadAction<{ property: keyof skipsSliceState['filters'] }>) => {
            state.filters[action.payload.property] = null;
            state.filteredSkips = state.skips;
        }),
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

export const { addRadioFilter, removeRadioFilter } = skipsSlice.actions;
export const { } = skipsSlice.selectors;
export default skipsSlice.reducer;