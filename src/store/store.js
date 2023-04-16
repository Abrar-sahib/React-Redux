import { configureStore } from "@reduxjs/toolkit";
import cartRrducer from './cartSlice'
import productReducer from './productSlice'
import authReducer from './authSlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer:{
        cart: cartRrducer,
        product: productReducer,
        auth : authReducer,
        user: userReducer,


    }
})

export default store