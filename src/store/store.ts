import { configureStore } from "@reduxjs/toolkit";
import { dogsApi } from "./dogsSlice";

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
