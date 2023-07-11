import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Slices/user";
import productsReducer from "../Redux/Slices/products";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});
