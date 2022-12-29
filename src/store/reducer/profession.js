import { createSlice } from "@reduxjs/toolkit";
export const job=createSlice({
    name:"job",
    initialState:{value:{name:"programmer"}},
    reducers:{
       title :(state,action)=>{
            state.value=action.payload;
        }
    }  
});
export default job.reducer;
export const {title}=job.actions;
