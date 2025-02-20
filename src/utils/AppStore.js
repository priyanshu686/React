import { configureStore } from "@reduxjs/toolkit";
import Reducer from './cartSlice';
const AppStore = configureStore({
  reducer:{
    cart: Reducer
  }  
})
export default AppStore;