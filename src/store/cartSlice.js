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
        state.totalPrice += action.payload.price;
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        existingItem.totalCost = existingItem.totalCost + action.payload.price;
      } else {
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const removedItem = state.items.find((item) => item.id === id);
      state.totalPrice = state.totalPrice - removedItem.totalCost;
      state.totalQuantity = state.totalQuantity - removedItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity = existingItem.quantity + 1;
      existingItem.totalCost = existingItem.totalCost + existingItem.price
      state.totalQuantity = state.totalQuantity + 1
      state.totalPrice = state.totalPrice + existingItem.price

    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity = existingItem.quantity - 1;
      existingItem.totalCost = existingItem.totalCost - existingItem.price
      state.totalQuantity = state.totalQuantity - 1
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
