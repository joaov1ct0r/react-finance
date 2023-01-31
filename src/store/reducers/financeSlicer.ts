import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Finance from "../../utils/Finance";

export const financeSlice = createSlice({
  name: "Finance",
  initialState: [
    {
      id: 1,
      description: "Teste",
      value: 10,
      date: "15/09/2001",
      type: "positive",
    },
    {
      id: 2,
      description: "Teste 2 Teste 2",
      value: -100,
      date: "15/09/2001",
      type: "negative",
    },
  ] as Finance[],
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
      reducer: (state: Finance[], action: PayloadAction<number>) => {
        return state.filter(
          (finance: Finance) => finance.id !== action.payload
        );
      },

      prepare: (data: number) => {
        return { payload: data };
      },
    },
  },
});

export const { createFinance, deleteFinance } = financeSlice.actions;

export default financeSlice.reducer;
