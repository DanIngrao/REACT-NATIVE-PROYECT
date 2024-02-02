import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    value:{
      email: null,
      idToken: null,
      localId: null
    }
  },
  reducers: {
    setUser: (state,action) =>{
        state.value = {
          user: action.payload.email,
          idToken: action.payload.idToken,
          localId: action.payload.localId
        }
    },
    clearUser: (state) => {
        state.value = {user: null, idToken: null, localId: null}
    },
    
  },
})


export const { setUser , clearUser } = authSlice.actions

export default authSlice.reducer