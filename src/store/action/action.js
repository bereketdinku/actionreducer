import React from 'react'

export const username=(payload)=>{
 return {
    type:'first',
    payload,
 }    
};
export const last=(payload)=>{
    return{
        type:'last',
        payload
    }
};
export const age=(payload)=>{
    return{
        type:'age',
        payload
    }
};
export const sex=(payload)=>{
    return{
        type:'sex',
        payload
    }
};
export const profession=(payload)=>{
    return{
        type:'profession',
        payload,
    }
}