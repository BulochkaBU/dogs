import { configureStore } from "@reduxjs/toolkit";
import { dogsApi } from "./dogsApi";
import DogsSlice from "./DogsSlice";

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
    dogSlice: DogsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
