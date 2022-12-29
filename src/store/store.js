import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import {reducer } from './reducer/reducer'
import useReducer from './reducer/reducer'
import lastReducer from'./reducer/last';
import jobReducer from './reducer/profession'
import agereducer from './reducer/age'
import genderreducer from './reducer/gender'
export const store=configureStore({
    reducer:{
     user:useReducer,
     last:lastReducer,
     job:jobReducer,
     age:agereducer,
     sex:genderreducer,
    }
});
