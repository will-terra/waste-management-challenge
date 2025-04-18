import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Footer } from "@/components/organisms/Footer";
import { configureStore } from "@reduxjs/toolkit";
import skipsReducer from "@/lib/features/skips/skipsSlice";
import filterReducer from "@/lib/features/filter/filterSlice";

const initialState = {
  skips: {
    skips: [],
    selectedSkip: {
      id: 11557,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 448,
      vat: 20,
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: undefined,
    filteredSkips: [],
    isMobile: false,
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
      price: [311, 944] as [number, number],
    },
  },
};

const store = configureStore({
  reducer: {
    skips: skipsReducer,
    filter: filterReducer,
  },
  preloadedState: initialState,
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("Footer component", () => {
  test("renders Footer component", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  test("renders Cancel button", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  test("clicking Cancel button dispatches setSelectedSkip action", () => {
    renderWithProviders(<Footer />);
    const cancelButton = screen.getByText("Cancel");
    cancelButton.click();
    expect(store.getState().skips.selectedSkip).toBeNull();
  });
});
