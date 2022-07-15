import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, TParamsCAT } from "./types";

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
