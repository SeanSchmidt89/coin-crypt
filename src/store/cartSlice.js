import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.quantity++;
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
      } else {
        state.quantity++
        state.items.push(action.payload)
      }
    },
  },
});
