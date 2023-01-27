import { configureStore } from "@reduxjs/toolkit";
import financeSlicer from "./store/reducers/financeSlicer";

const store = configureStore({
  reducer: financeSlicer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ReduxState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
