import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { RootState } from "../store";

export type TCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface ICardSlice {
  totalPrice: number;
  items: TCartItem[];
}

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: ICardSlice = {
  totalPrice: totalPrice,
  items: items,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCartItems = (id: string) => (state: RootState) =>
  state.cardSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItem } = cardSlice.actions;

export default cardSlice.reducer;
