import { Skip } from "@/types/types";
import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchSkips } from "./skipsApiSlice";

interface skipsSliceState {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | undefined;
    skips: Skip[];
    filteredSkips: Skip[];
    selectedSkip: Skip | null;
    isMobile: boolean;
};

export const skipsSlice = createAppSlice({
    name: "skips",
    initialState: {
        status: "idle",
        error: undefined,
        skips: [],
        filteredSkips: [],
        selectedSkip: null,
        isMobile: true,
    } as skipsSliceState,
    reducers: (create) => ({
        setIsMobile: create.reducer((state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        }),
        setSelectedSkip: create.reducer((state, action: PayloadAction<Skip | null>) => {
            state.selectedSkip = action.payload;
        }),
        setFilteredSkips: create.reducer((state, action: PayloadAction<Skip[]>) => {
            state.filteredSkips = action.payload;
        }),
    }),
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkips.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSkips.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.skips = action.payload;
                state.filteredSkips = action.payload;
            })
            .addCase(fetchSkips.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { setIsMobile, setSelectedSkip, setFilteredSkips } = skipsSlice.actions;
