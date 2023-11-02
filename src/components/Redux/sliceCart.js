import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cart: [],
  searchProducts: [],
  productsByCategory: [],
};

export const sliceCart = createSlice({
  name: "sliceProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
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
    setOrderByPrice: (state, action) => {
      const order = action.payload;
      if (order === "Asc") {
        state.allProducts = [...state.allProducts].sort(
          (a, b) => a.price - b.price
        );
        state.searchProducts = [...state.searchProducts].sort(
          (a, b) => a.price - b.price
        );
        state.productsByCategory = [...state.productsByCategory].sort(
          (a, b) => a.price - b.price
        );
      } else if (order === "Des") {
        state.allProducts = [...state.allProducts].sort(
          (a, b) => b.price - a.price
        );
        state.searchProducts = [...state.searchProducts].sort(
          (a, b) => b.price - a.price
        );
        state.productsByCategory = [...state.productsByCategory].sort(
          (a, b) => a.price - b.price
        );
      }
    },
    setSearchProducts: (state, action) => {
      const order = action.payload;
      state.searchProducts = order;
    },
    setProductsByCategory: (state, action) => {
      const order = action.payload;
      const filteredProducts = state.allProducts.filter(
        (product) => product.category === order
      );
      state.productsByCategory = filteredProducts;
      if (order == "todos") {
        state.productsByCategory = state.allProducts;
      }
    },
  },
});

export const getAllProducts = (state) => state.sliceProducts.allProducts;
export const getCart = (state) => state.sliceProducts.cart;
export const getSearchProducts = (state) => state.sliceProducts.searchProducts;
export const getProductsByCategory = (state) =>
  state.sliceProducts.productsByCategory;

export const {
  setAllProducts,
  setCart,
  setRemoveCart,
  setOrderByPrice,
  setSearchProducts,
  setProductsByCategory,
} = sliceCart.actions;

export default sliceCart.reducer;
