import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Shop/shopSlice'
import { shopApi } from '../Services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../Services/authService'


const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware)
})

setupListeners(store.dispatch)

export default store;