export type TParamsCAT = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: number;
};
export type Pizza = {
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

export interface IPizzaSlice {
  items: Pizza[];
  status: Status;
}
