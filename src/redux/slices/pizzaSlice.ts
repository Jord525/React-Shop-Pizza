import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SortPropertyEnum } from "./filterSlice";

export type TParamsCAT = {
  sortBy: SortPropertyEnum;
  order: string;
  category: string;
  search: string;
  currentPage: number;
};

export const fetchPizzas = createAsyncThunk<Pizza[], TParamsCAT>(
  "users/fetchPizzasStatus",
  async (params: TParamsCAT) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62a45a0f259aba8e10e6cc3b.mockapi.io/iteams?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
type Pizza = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  count: number;
  imageUrl: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface IPizzaSlice {
  items: Pizza[];
  status: Status;
}

const initialState: IPizzaSlice = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
