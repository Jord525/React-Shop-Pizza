import { RootState } from "../store";

export const selectCartItems = (id: string) => (state: RootState) =>
  state.cardSlice.items.find((obj) => obj.id === id);
