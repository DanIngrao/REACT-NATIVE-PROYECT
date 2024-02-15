import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        value:{
            user: 'userLogged',
            updateAt: Date.now().toLocaleString(),
            total: null,
            items: []
        }
    },
    reducers:{
        addItem:(state,action)=>{
          
          const foundItem = state.value.items.find(item => item.id === action.payload.id)
    
          if(foundItem) foundItem.quantity++
          else state.value.items.push({...action.payload,quantity:1})
    
          state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
          state.value.updateAt = new Date().toLocaleString()
        },
        clearCart:(state)=>{
          state.value.total = null
          state.value.items = []
        },
        removeItem:(state,action) =>{
          state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
        }
      },
    })

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer