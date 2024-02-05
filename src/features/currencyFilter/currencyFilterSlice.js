import { createSlice } from "@reduxjs/toolkit";

const currencyFilterSlice = createSlice({
  name: "currencyFilter",
  initialState: "USD",
  reducers: {
    setCurrency: (state, action) => (state = action.payload),
  },
});

export const { setCurrency } = currencyFilterSlice.actions;
export default currencyFilterSlice.reducer;
