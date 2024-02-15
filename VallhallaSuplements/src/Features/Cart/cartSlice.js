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
    
          if(foundItem) foundItem.quantity += action.payload.quantity
          else state.value.items.push({...action.payload})
    
          state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
          state.value.updateAt = new Date().toLocaleString()
        },
        clearCart:(state)=>{
          state.value.total = null
          state.value.items = []
        },
        removeItem:(state,action) =>{
        }
      },
    })

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer