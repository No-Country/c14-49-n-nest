import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cart: [],
  renderProducts: [],
  filteredServices: [],
};

export const sliceCart = createSlice({
  name: "sliceProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setFilteredServices: (state, action) => {
      state.filteredServices = action.payload;
    },
    setRenderProducts: (state, action) => {
      state.renderProducts = action.payload;
    },
    setCart: (state, action) => {
      const prod = state.allProducts.find(
        (product) => product.id == action.payload
      );
      if (prod) {
        const existingProduct = state.cart.find((item) => item.id == prod.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
          existingProduct.countInStock -= 1;
        } else {
          state.cart.push({ ...prod, quantity: 1 });
        }
      }
    },
    setRemoveCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id == action.payload
      );
      if (existingProduct) {
        const index = state.cart.findIndex((item) => item.id == action.payload);
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.countInStock += 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const getAllProducts = (state) => state.sliceProducts.allProducts;
export const getRenderProducts = (state) => state.sliceProducts.renderProducts;
export const getCart = (state) => state.sliceProducts.cart;
export const getFilteredServices = (state) =>
  state.sliceProducts.filteredServices;

export const {
  setAllProducts,
  setCart,
  setRemoveCart,
  setRenderProducts,
  setFilteredServices,
} = sliceCart.actions;

export default sliceCart.reducer;
