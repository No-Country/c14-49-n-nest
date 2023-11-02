import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import userHandler from "./sliceUser";
export const store = configureStore({
  reducer: {
    user: userHandler,
    sliceProducts: sliceCart,
  },
});
