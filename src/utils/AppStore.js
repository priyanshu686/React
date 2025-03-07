import { configureStore } from "@reduxjs/toolkit";
import Reducer from './cartSlice';
const AppStore = configureStore({
  reducer:{
    carts: Reducer
  }  
})
export default AppStore;