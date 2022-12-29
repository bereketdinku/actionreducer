import { createSlice } from "@reduxjs/toolkit";
export const gender=createSlice({
    name:"gender",
    initialState:{value:{sex:"none"}},
    reducers:{
        sex:(state,action)=>{
            state.value=action.payload;
        }
    }  
});
export default gender.reducer;
export const {sex}=gender.actions;
