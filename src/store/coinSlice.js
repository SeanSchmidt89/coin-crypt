import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  coinDetail: {},
  pageList: [],
  pageIndex1: 0,
  pageIndex2: 12,
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {
    fetchCoins: (state, action) => {
      state.coins = action.payload;
      state.pageList = state.coins.slice(0, 12);
    },
    coinDetail: (state, action) => {
      state.coinDetail = action.payload;
    },
    nextPage: (state, action) => {
      state.pageIndex1 = action.payload * 12;
      state.pageIndex2 = action.payload * 12 + 12;
      state.pageList = state.coins.slice(state.pageIndex1, state.pageIndex2);
    },
    prevPage: (state, action) => {
      state.pageIndex1 = action.payload * 12 - 24
      state.pageIndex2 = action.payload * 12 - 12;
      state.pageList = state.coins.slice(state.pageIndex1, state.pageIndex2);
    },
  },
});

export const coinSliceActions = coinSlice.actions;

export default coinSlice.reducer;
