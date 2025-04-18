import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Nav } from "@/components/organisms/Nav";
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

const mobileStore = configureStore({
  reducer: {
    skips: skipsReducer,
    filter: filterReducer,
  },
  preloadedState: {
    ...initialState,
    skips: {
      ...initialState.skips,
      isMobile: true,
    },
  },
});

describe("Nav Component", () => {
  test("should render correctly on desktop", () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Nav />
      </Provider>,
    );
    expect(getByText("Postcode")).toBeInTheDocument();
    expect(getByText("Waste Type")).toBeInTheDocument();
    expect(getByText("Select Skip")).toBeInTheDocument();
    expect(getByText("Permit Check")).toBeInTheDocument();
    expect(getByText("Choose Date")).toBeInTheDocument();
    expect(getByText("Payment")).toBeInTheDocument();
  });

  test("should render correctly on mobile", () => {
    const { getByText, queryByText } = render(
      <Provider store={mobileStore}>
        <Nav />
      </Provider>,
    );
    expect(queryByText("Postcode")).not.toBeInTheDocument();
    expect(queryByText("Waste Type")).not.toBeInTheDocument();
    expect(getByText("Select Skip")).toBeInTheDocument();
    expect(queryByText("Permit Check")).not.toBeInTheDocument();
    expect(queryByText("Choose Date")).not.toBeInTheDocument();
    expect(queryByText("Payment")).not.toBeInTheDocument();
  });
});
