import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sort: SortPropertyEnum;
};

export interface IFilterSlice {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

const initialState: IFilterSlice = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sort: SortPropertyEnum.RATING_DESC,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategotyId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSeachValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSlice>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setSeachValue,
  setCategotyId,
  setSort,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
