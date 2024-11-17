import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketDatas: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    allBasketDatas: (state, action) => {
      state.basketDatas = action.payload;
    },
    addToBasket: (state, action) => {
      const item = action.payload;

      const existingItem = state.basketDatas.find(
        (basketItem) => basketItem.id === item.id
      );
      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        state.basketDatas.push(item);
      }
    },
  },
});

export const { allBasketDatas, addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
