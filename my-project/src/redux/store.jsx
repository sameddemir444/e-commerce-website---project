import { configureStore } from "@reduxjs/toolkit";
import getdatasReducer from "./getdatasSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    getdatas: getdatasReducer,
    basket: basketReducer,
  },
});
