import { createSlice } from "@reduxjs/toolkit";
export const last=createSlice({
    name:"last",
    initialState:{value:{name:"dinku"}},
    reducers:{
        lastname:(state,action)=>{
            state.value=action.payload;
        }
    }  
});
export default last.reducer;
export const {lastname}=last.actions;
