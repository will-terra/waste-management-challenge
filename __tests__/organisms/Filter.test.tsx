import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import skipsReducer from "@/lib/features/skips/skipsSlice";
import filterReducer from "@/lib/features/filter/filterSlice";
import { Filter } from "@/components/organisms/Filter";

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img
            src="/test-image.jpg"
            {...props}
        />
    },
}));

const initialState = {
    skips: {
        skips: [],
        filteredSkips: [{
            id: 11557,
            size: 10,
            hire_period_days: 14,
            transport_cost: null,
            per_tonne_cost: null,
            price_before_vat: 448,
            vat: 20,
            allowed_on_road: false,
            allows_heavy_waste: false
        }, {
            id: 11557,
            size: 10,
            hire_period_days: 14,
            transport_cost: null,
            per_tonne_cost: null,
            price_before_vat: 448,
            vat: 20,
            allowed_on_road: false,
            allows_heavy_waste: false
        }],
        selectedSkip: {
            id: 11557,
            size: 10,
            hire_period_days: 14,
            transport_cost: null,
            per_tonne_cost: null,
            price_before_vat: 448,
            vat: 20,
            allowed_on_road: false,
            allows_heavy_waste: false
        },
        status: 'succeeded' as 'idle' | 'loading' | 'succeeded' | 'failed',
        error: undefined,
        isMobile: false
    },
    filter: {
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
            price: [311, 944] as [number, number]
        }
    }
};

const store = configureStore({
    reducer: {
        skips: skipsReducer,
        filter: filterReducer,
    },
    preloadedState: initialState
});

const renderWithProviders = (ui: React.ReactElement) => {
    return render(<Provider store={store}>{ui}</Provider>);
};

describe("Filter Component", () => {
    test("renders Filter component", () => {
        renderWithProviders(<Filter isMobile={false} />);
        expect(screen.getByText(/Filters:/i)).toBeInTheDocument();
    });

    test("renders Filter component in mobile view", () => {
        renderWithProviders(<Filter isMobile={true} />);
        expect(screen.getByLabelText(/Open filters menu/i)).toBeInTheDocument();
    });

    test("toggles filter options on click", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const filterButtons = screen.getAllByText(236);
        const filterButton = filterButtons[0];
        fireEvent.click(filterButton);
        expect(filterButton).toHaveClass("bg-lightBlue");
    });

    test("dispatches handleBooleanFilter action on boolean filter change", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const filterButton = screen.getAllByText("Yes")[0];
        fireEvent.click(filterButton);
        expect(store.getState().filter.boolean.allows_heavy_waste).toBe(true);
    });

    test("dispatches handleBooleanFilter action with null value on boolean filter reset", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const resetButton = screen.getAllByAltText("remove")[3];
        fireEvent.click(resetButton);
        expect(store.getState().filter.boolean.allows_heavy_waste).toBeNull();
    });

    test("dispatches handleNumericFilter action with null value on numeric filter reset", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const resetButton = screen.getAllByAltText("remove")[0];
        fireEvent.click(resetButton);
        expect(store.getState().filter.numeric.per_tonne_cost).toBeNull();
    });

    test("removes numeric filter value on remove button click", () => {
        renderWithProviders(<Filter isMobile={false} />);

        const filterButton = screen.getAllByText(236)[0];
        fireEvent.click(filterButton);
        const apllyButton = screen.getByText("Apply filters");
        fireEvent.click(apllyButton);
        expect(store.getState().filter.numeric.per_tonne_cost).toBe(236);
        const removeButton = screen.getAllByAltText("remove")[0];
        fireEvent.click(removeButton);
        expect(store.getState().filter.numeric.per_tonne_cost).toBeNull();

        const secondFilterButton = screen.getAllByText(236)[1];
        fireEvent.click(secondFilterButton);
        const secondApllyButton = screen.getByText("Apply filters");
        fireEvent.click(secondApllyButton);
        expect(store.getState().filter.numeric.transport_cost).toBe(236);
        const secondRemoveButton = screen.getAllByAltText("remove")[1];
        fireEvent.click(secondRemoveButton);
        expect(store.getState().filter.numeric.transport_cost).toBeNull();

        const thirdFilterButton = screen.getAllByText(14)[0];
        fireEvent.click(thirdFilterButton);
        const thirdApllyButton = screen.getByText("Apply filters");
        fireEvent.click(thirdApllyButton);
        expect(store.getState().filter.numeric.hire_period_days).toBe(14);
        const thirdRemoveButton = screen.getAllByAltText("remove")[2];
        fireEvent.click(thirdRemoveButton);
        expect(store.getState().filter.numeric.hire_period_days).toBeNull();
    });

    test("removes boolean filter value on remove button click", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const filterButton = screen.getAllByText("Yes")[1];
        fireEvent.click(filterButton);
        const apllyButton = screen.getByText("Apply filters");
        fireEvent.click(apllyButton);
        expect(store.getState().filter.boolean.allowed_on_road).toBe(true);
        const removeButton = screen.getAllByAltText("remove")[4];
        fireEvent.click(removeButton);
        expect(store.getState().filter.boolean.allowed_on_road).toBeNull();

    });

    test("dispatch ResetFilters action on reset button click", () => {
        renderWithProviders(<Filter isMobile={false} />);
        const filterButton = screen.getAllByText(236)[0];
        fireEvent.click(filterButton);
        const apllyButton = screen.getByText("Apply filters");
        fireEvent.click(apllyButton);
        expect(store.getState().filter.numeric.per_tonne_cost).toBe(236);
        const removeButton = screen.getAllByAltText("remove")[5];
        fireEvent.click(removeButton);
        expect(store.getState().filter.numeric.per_tonne_cost).toBeNull();
    });

    test("opens and closes filter menu in mobile view", () => {
        renderWithProviders(<Filter isMobile={true} />);
        const openButton = screen.getByLabelText(/Open filters menu/i);
        fireEvent.click(openButton);
        expect(screen.getByText(/By Price/i)).toBeInTheDocument();
        fireEvent.click(openButton);
        expect(screen.queryByText(/By Price/i)).not.toBeInTheDocument();
    });
});

