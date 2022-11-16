import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  coinDetail: {},
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {
    fetchCoins: (state, action) => {
      state.coins = action.payload;
    },
    coinDetail: (state, action) => {
      state.coinDetail = action.payload
    }
  },
});

export const coinSliceActions = coinSlice.actions;

export default coinSlice.reducer;
