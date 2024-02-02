import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {}, // Empty initial cart
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const quantity = state[name] ? state[name].quantity + 1 : 1; // Handle existing items with Immer
      state[name] = { price, quantity }; // Directly update state using Immer
    },
    changeItemQuantity: (state, action) => {
      const { name, newQuantity } = action.payload;
      state[name].quantity = newQuantity; // Directly update quantity using Immer
    },
  },
});

export const { addItem, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;                             