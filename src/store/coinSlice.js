import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  coinDetail: {},
  pageList: [],
  pageIndex1: 0,
  pageIndex2: 9,
  rowsList: [],
  rowsIndex1: 0,
  rowsIndex2: 16,
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {
    fetchCoins: (state, action) => {
      state.coins = action.payload;
      state.pageList = state.coins.slice(0, 9);
      state.rowsList = state.coins.slice(0, 16);
    },
    coinDetail: (state, action) => {
      state.coinDetail = action.payload;
    },
    nextPage: (state, action) => {
      state.pageIndex1 = action.payload * 9;
      state.pageIndex2 = action.payload * 9 + 9;
      state.pageList = state.coins.slice(state.pageIndex1, state.pageIndex2);
    },
    prevPage: (state, action) => {
      state.pageIndex1 = action.payload * 9 - 18;
      state.pageIndex2 = action.payload * 9 - 9;
      state.pageList = state.coins.slice(state.pageIndex1, state.pageIndex2);
    },
    nextRows: (state, action) => {
      state.rowsIndex1 = action.payload * 16;
      state.rowsIndex2 = action.payload * 16 + 16;
      state.rowsList = state.coins.slice(state.rowsIndex1, state.rowsIndex2);
    },
    prevRows: (state, action) => {
      state.rowsIndex1 = action.payload * 16 - 32;
      state.rowsIndex2 = action.payload * 16 - 16;
      state.pageList = state.coins.slice(state.rowsIndex1, state.rowsIndex2);
    },
  },
});

export const coinSliceActions = coinSlice.actions;

export default coinSlice.reducer;
