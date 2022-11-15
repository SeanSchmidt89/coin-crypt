import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coinSlice";

const coinStore = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default coinStore;
