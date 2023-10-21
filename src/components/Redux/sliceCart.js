import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cart: [],
};

export const sliceCart = createSlice({
  name: "sliceProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setCart: (state, action) => {
      const prod = state.allProducts.find((product) => product.id == action.payload);
      if (prod) {
        const existingProduct = state.cart.find((item) => item.id == prod.id);
        if (existingProduct) {
          existingProduct.quantity += 1; // Incrementa la cantidad del producto existente
        } else {
          state.cart.push({ ...prod, quantity: 1 }); // Agrega un nuevo producto al carrito
        }
      }
    },
    setRemoveCart: (state, action) => {
      const existingProduct = state.cart.find((item) => item.id == action.payload);
      if (existingProduct) {
        const index = state.cart.findIndex((item) => item.id == action.payload);
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Disminuye la cantidad del producto
        } else {
          state.cart.splice(index, 1); // Elimina el producto del carrito
        }
      }
    },
  },
});

export const getAllProducts = (state) => state.sliceProducts.allProducts;
export const getCart = (state) => state.sliceProducts.cart;

export const { setAllProducts, setCart, setRemoveCart } = sliceCart.actions;

export default sliceCart.reducer;
