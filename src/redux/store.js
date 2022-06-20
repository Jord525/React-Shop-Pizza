import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cardSlice from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    cardSlice,
  },
});
