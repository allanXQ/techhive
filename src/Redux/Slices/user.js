import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  phone: "",
  lastViewed: [],
  cart: [],
  orders: [],
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.lastViewed = action.payload.lastViewed;
      state.cart = action.payload.cart;
      state.orders = action.payload.orders;
      state.wishlist = action.payload.wishlist;
    },
    logout: (state) => {
      state = initialState;
    },
    updateContact: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    addToLastViewed: (state, action) => {
      state.lastViewed.push(action.payload);
    },
    removeFromLastViewed: (state, action) => {
      state.lastViewed = state.lastViewed.filter(
        (item) => item.id !== action.payload
      );
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const {
  login,
  logout,
  updateContact,
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  addToLastViewed,
  removeFromLastViewed,
  addOrder,
} = userSlice.actions;

export const getUser = (state) => state.user;

export default userSlice.reducer;
