import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coinSlice";
import cartReducer from './cartSlice';

const coinStore = configureStore({
  reducer: {
    coins: coinReducer,
    cart: cartReducer,
  },
});

export default coinStore;
