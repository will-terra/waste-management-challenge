import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { EnhancedStore } from "@reduxjs/toolkit";
import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/organisms/Footer";
import skipsReducer, { setSelectedSkip } from "@/lib/features/skips/skipsSlice";
import filterReducer from "@/lib/features/filter/filterSlice";
import { Skip } from "@/types/types";

const createTestStore = (selectedSkip: Skip | null = null): EnhancedStore => {
  const store = configureStore({
    reducer: {
      filter: filterReducer,
      skips: skipsReducer,
    },
  });

  if (selectedSkip) {
    store.dispatch(setSelectedSkip(selectedSkip));
  }

  return store;
};

const StoreWrapper = (store: EnhancedStore) => (Story: React.ComponentType) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A Footer that only is visible when a skip is selected.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2A2A2A" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const WithSkipSelected: Story = {
  decorators: [
    StoreWrapper(
      createTestStore({
        id: 11557,
        size: 10,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 448,
        vat: 20,
        allowed_on_road: false,
        allows_heavy_waste: false,
      }),
    ),
  ],
};

export const NoSkipSelected: Story = {
  decorators: [StoreWrapper(createTestStore())],
};
