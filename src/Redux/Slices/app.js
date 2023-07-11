import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const AppState = configureStore({
  name: "AppState",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
