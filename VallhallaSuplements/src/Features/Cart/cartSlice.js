import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        value:{
            user: '',
            updateAt: Date.now().toLocaleString(),
            total: 0,
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
        userCart:(state,action)=>{
          state.value.user=`${action.payload}`
        }
        ,
        removeItem:(state,action) =>{
          const { id } = action.payload;
          state.value.items = state.value.items.filter(item => item.id !== id)
          state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
        }
      },
    })

export const {addItem, removeItem, clearCart, userCart} = cartSlice.actions

export default cartSlice.reducer