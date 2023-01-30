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
    },
    {
      id: 2,
      description: "Teste 2 Teste 2",
      value: 100,
      date: "15/09/2001",
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

    editFinance: {
      reducer: (state: Finance[], action: PayloadAction<Finance>) => {
        return state.map((finance: Finance) => {
          if (finance.id === action.payload.id) {
            finance.description = action.payload.description;
            finance.value = action.payload.value;
            finance.date = action.payload.date;
          }

          return finance;
        });
      },

      prepare: (data: Finance) => {
        return { payload: data };
      },
    },

    deleteFinance: {
      reducer: (state: Finance[], action: PayloadAction<Finance>) => {
        return state.filter(
          (finance: Finance) => finance.id !== action.payload.id
        );
      },

      prepare: (data: Finance) => {
        return { payload: data };
      },
    },
  },
});

export const { createFinance, deleteFinance, editFinance } =
  financeSlice.actions;

export default financeSlice.reducer;
