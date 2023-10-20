import { configureStore } from '@reduxjs/toolkit'
import  sliceCart  from "./sliceCart"
export const store = configureStore({
    reducer: {sliceProducts: sliceCart}
})