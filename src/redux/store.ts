import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/slice";
import cardSlice from "./cart/slice";
import pizzaSlice from "./pizza/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filterReducer,
    cardSlice,
    pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
