import { createSlice } from "@reduxjs/toolkit";
export const age=createSlice({
    name:"age",
    initialState:{value:{agevalue:0}},
    reducers:{
      ageval  :(state,action)=>{
            state.value=action.payload;
        }
    }  
});
export default age.reducer;
export const {ageval}=age.actions;
