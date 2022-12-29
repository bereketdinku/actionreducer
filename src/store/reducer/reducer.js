import { createSlice } from "@reduxjs/toolkit";
export const user=createSlice({
    name:"user",
    initialState:{value:{name:"bereket"}},
    reducers:{
        name:(state,action)=>{
            state.value=action.payload;
        }
    }  
})
export default user.reducer;
export const {name}=user.actions;
