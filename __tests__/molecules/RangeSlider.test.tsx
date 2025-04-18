import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { RangeSlider } from "@/components/molecules/RangeSlider";

const mockStore = configureStore();

describe("RangeSlider Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      filter: {
        range: {
          price: [311, 944],
        },
      },
    });
    store.dispatch = jest.fn();
  });

  test("should render the RangeSlider component", () => {
    render(
      <Provider store={store}>
        <RangeSlider />
      </Provider>,
    );
    const sliderElements = screen.getAllByRole("slider");
    expect(sliderElements.length === 2).toBeTruthy();
  });

  test("should dispatch handleRangeFilter when the slider value changes", () => {
    render(
      <Provider store={store}>
        <RangeSlider />
      </Provider>,
    );

    const sliderElements = screen.getAllByRole("slider");
    fireEvent.change(sliderElements[0], { target: { value: 400 } });
    fireEvent.change(sliderElements[1], { target: { value: 800 } });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
