import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity++;
        state.totalPrice += action.payload.price
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        existingItem.totalCost = existingItem.totalCost + action.payload.price
      } else {
        state.totalQuantity++
        state.totalPrice += action.payload.price
        state.items.push(action.payload)
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions

export default cartSlice.reducer
