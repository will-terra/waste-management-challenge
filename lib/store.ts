import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { skipsSlice } from "./features/skips/skipsSlice";
import { fetchSkips } from "./features/skips/skipsApiSlice";
import { filterSlice } from "./features/filter/filterSlice";

export const rootReducer = combineSlices(skipsSlice, filterSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchSkips());

export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
