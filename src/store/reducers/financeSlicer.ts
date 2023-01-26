import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Finance from "../../utils/Finance";

export const financeSlice = createSlice({
  name: "Finance",
  initialState: [] as Finance[],
  reducers: {
    createFinance: {
      reducer: (state: Finance[], action: PayloadAction<Finance>) => {
        return state.concat(action.payload);
      },
    },
  },
});
