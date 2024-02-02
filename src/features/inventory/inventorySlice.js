import { createSlice } from '@reduxjs/toolkit';
import { inventoryData } from "../../data";

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: inventoryData, // Set initial state directly from inventoryData
  reducers: {
    loadData: (state) => state, // No need to modify state, as it's already set
  },
});

export const { loadData } = inventorySlice.actions;

export default inventorySlice.reducer;