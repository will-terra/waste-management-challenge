import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ProductGrid } from "../../components/organisms/ProductGrid";
import { configureStore } from "@reduxjs/toolkit";
import skipsReducer from "@/lib/features/skips/skipsSlice";
import filterReducer from "@/lib/features/filter/filterSlice";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src="/test-image.jpg" {...props} />;
  },
}));

const initialState = {
  skips: {
    skips: [],
    filteredSkips: [
      {
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
      {
        id: 11558,
        size: 10,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 448,
        vat: 20,
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
    ],
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
    status: "succeeded" as "idle" | "loading" | "succeeded" | "failed",
    error: undefined,
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

const errorStore = configureStore({
  reducer: {
    skips: skipsReducer,
    filter: filterReducer,
  },
  preloadedState: {
    ...initialState,
    skips: {
      ...initialState.skips,
      status: "failed" as "idle" | "loading" | "succeeded" | "failed",
    },
  },
});

const emptyStore = configureStore({
  reducer: {
    skips: skipsReducer,
    filter: filterReducer,
  },
  preloadedState: {
    ...initialState,
    skips: {
      ...initialState.skips,
      filteredSkips: [],
    },
  },
});

const loadingStore = configureStore({
  reducer: {
    skips: skipsReducer,
    filter: filterReducer,
  },
  preloadedState: {
    ...initialState,
    skips: {
      ...initialState.skips,
      status: "loading" as "idle" | "loading" | "succeeded" | "failed",
    },
  },
});

describe("ProductGrid", () => {
  test("renders error state", () => {
    render(
      <Provider store={errorStore}>
        <ProductGrid />
      </Provider>,
    );

    expect(screen.getByText("Error on fetching skips :(")).toBeInTheDocument();
    expect(screen.getByText("Try reloading the page")).toBeInTheDocument();
  });

  test("renders empty state", () => {
    render(
      <Provider store={emptyStore}>
        <ProductGrid />
      </Provider>,
    );

    expect(screen.getByText("Ooops, no skips found :(")).toBeInTheDocument();
    expect(screen.getByText("Try using less filters")).toBeInTheDocument();
  });

  test("renders skips", () => {
    render(
      <Provider store={store}>
        <ProductGrid />
      </Provider>,
    );
    expect(screen.getAllByAltText("Skip with garbage")[0]).toBeInTheDocument();
    expect(screen.getAllByAltText("Skip with garbage")[1]).toBeInTheDocument();
  });

  test("renders loading state", () => {
    render(
      <Provider store={loadingStore}>
        <ProductGrid />
      </Provider>,
    );

    expect(
      screen.queryByText("Error on fetching skips :("),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Ooops, no skips found :("),
    ).not.toBeInTheDocument();
    expect(screen.queryByAltText("Skip with garbage")).not.toBeInTheDocument();
  });
});
