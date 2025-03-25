import { Skip } from "@/types/types";
import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export interface FilterSliceState {
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

export const applyFiltersThunk = createAsyncThunk(
    'filter/applyFilters',
    async (_, { getState, dispatch }) => {
        const state = getState() as RootState;
        const filters = state.filter;
        const skips = state.skips.skips;

        const filteredSkips = skips.filter((skip) => {
            const allowedOnRoadFilter = filters.boolean.allowed_on_road === null ||
                skip.allowed_on_road === filters.boolean.allowed_on_road;

            const heavyWasteFilter = filters.boolean.allows_heavy_waste === null ||
                skip.allows_heavy_waste === filters.boolean.allows_heavy_waste;

            const hirePeriodFilter = filters.numeric.hire_period_days === null ||
                filters.numeric.hire_period_days === 0 ||
                skip.hire_period_days === filters.numeric.hire_period_days;

            const transportCostFilter = filters.numeric.transport_cost === null ||
                filters.numeric.transport_cost === 0 ||
                skip.transport_cost === filters.numeric.transport_cost;

            const perTonneCostFilter = filters.numeric.per_tonne_cost === null ||
                filters.numeric.per_tonne_cost === 0 ||
                skip.per_tonne_cost === filters.numeric.per_tonne_cost;

            const priceFilter = skip.price_before_vat !== null && Array.isArray(filters.range.price) ?
                skip.price_before_vat >= filters.range.price[0] &&
                skip.price_before_vat <= filters.range.price[1] :
                skip.price_before_vat === filters.range.price;

            return allowedOnRoadFilter && heavyWasteFilter && hirePeriodFilter &&
                transportCostFilter && perTonneCostFilter && priceFilter;
        });

        dispatch({ type: 'skips/setFilteredSkips', payload: filteredSkips });
    }
);

export const resetFiltersThunk = createAsyncThunk(
    'filter/resetFilters',
    async (_, { getState, dispatch }) => {
        const state = getState() as RootState;

        dispatch({ type: 'skips/setFilteredSkips', payload: state.skips.skips });
    }
);

export const filterSlice = createAppSlice({
    name: "filter",
    initialState: {
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
    } as FilterSliceState,
    reducers: (create) => ({
        handleBooleanFilter: create.reducer((state, action: PayloadAction<{ property: keyof FilterSliceState["boolean"], value: boolean | null }>) => {
            if (action.payload.property in state.boolean) {
                state.boolean[action.payload.property] = action.payload.value;
            }
        }),
        handleNumericFilter: create.reducer((state, action: PayloadAction<{ property: keyof FilterSliceState["numeric"], value: number | null }>) => {
            if (action.payload.property in state.numeric) {
                state.numeric[action.payload.property] = action.payload.value;
            }
        }),
        handleRangeFilter: create.reducer((state, action: PayloadAction<{ property: keyof FilterSliceState["range"], value: number | [number, number] }>) => {
            if (action.payload.property === "price") {
                state.range.price = action.payload.value;
            }
        }),
        resetFilters: create.reducer((state) => {
            state.boolean = {
                allowed_on_road: null,
                allows_heavy_waste: null,
            };
            state.numeric = {
                hire_period_days: null,
                transport_cost: null,
                per_tonne_cost: null,
            };
            state.range = {
                price: [311, 944]
            };
        }),
    }),
});

export const { handleBooleanFilter, handleNumericFilter, handleRangeFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
