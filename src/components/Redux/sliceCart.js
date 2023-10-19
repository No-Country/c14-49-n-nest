import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts : [],
  cart: []
};
export const sliceCart = createSlice({
    name: "sliceProducts",
    initialState,
    reducers:{
        setAllProducts:(state,action)=>{
            state.allProducts = action.payload
        },
        setCart: (state, action) => {
            const prod = state.allProducts.find((product) => product.id == action.payload);
            if (prod) {
              const existingProduct = state.cart.find((item) => item.id == prod.id);
              if (existingProduct) {
                state.cart.push({ ...prod, quantity: existingProduct.quantity + 1 });
              } else {
                state.cart.push({ ...prod, quantity: 1 });
              }
            }
        },
        setRemoveCart: (state, action) => {
          const existingProduct = state.cart.find((item) => item.id == action.payload);
          if (existingProduct) {
            const index = state.cart.findIndex((item) => item.id == action.payload);
            // Crea una copia del producto con una cantidad disminuida
            const updatedProduct = {
              ...existingProduct,
              quantity: existingProduct.quantity - 1,
            };
            // Crea una copia del carrito con el producto actualizado
            state.cart = [
              ...state.cart.slice(0, index),
              updatedProduct,
              ...state.cart.slice(index + 1),
            ];
          } else {
            state.cart = state.cart.filter((item) => item.id != action.payload);
          }
        },        
}});

export const getAllProducts = (state) => state.sliceProducts.allProducts;
export const getCart = (state) => state.sliceProducts.cart;

export const {
    setAllProducts,
    setCart,
    setRemoveCart
} = sliceCart.actions

export default sliceCart.reducer;