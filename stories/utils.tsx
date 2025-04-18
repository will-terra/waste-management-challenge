import { Provider } from "react-redux";
import { store } from "@/lib/store";

export const StoreWrapper = (Story: React.ComponentType) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
