import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      ).then((res) => res.json());
      return response.products;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const Products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products.push(action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const getProductsStatus = (state) => state.products.status;

export const getAllProducts = (state) => state.products.products[0];

export default Products.reducer;
