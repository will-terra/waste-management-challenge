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
    allowedOnRoad: boolean | undefined;
}

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        skips: [],
        filteredSkips: [],
        allowedOnRoad: undefined,
        status: 'idle',
        error: undefined,
    } as skipsSliceState,
    reducers: (create) => ({
        filterByAllowedOnRoad: create.reducer((state, action: PayloadAction<boolean>) => {
            state.filteredSkips = state.skips.filter((skip) => skip.allowed_on_road === action.payload);
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

export const { filterByAllowedOnRoad } = skipsSlice.actions;
export const { } = skipsSlice.selectors;
export default skipsSlice.reducer;