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

      prepare: (data: Finance) => {
        const payload = new Finance(data.description, data.value, data.date);

        return { payload };
      },
    },

    deleteFinance: {
      reducer: (state: Finance[], action: PayloadAction<string>) => {
        return state.filter(
          (finance: Finance) => finance.id !== action.payload
        );
      },

      prepare: (data: string) => {
        return { payload: data };
      },
    },
  },
});

export const { createFinance, deleteFinance } = financeSlice.actions;

export default financeSlice.reducer;
