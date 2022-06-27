import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cardSlice from './slices/cardSlice';
import pizzaSlice from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    cardSlice,
    pizzaSlice,
  },
});
