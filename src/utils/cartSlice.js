import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        additems:(state , action)=>{
            // Mutating the state here
            state.items.push(action.payload);
        },
        removeitems: (state )=>{
            state.items.pop();
        },
        clearcart: (state)=>{
            state.items.length = 0;
        }
    }
})

export const {additems,removeitems,clearcart} = cartSlice.actions;

export default cartSlice.reducer;