import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Shop/shopSlice'
import { shopApi } from '../Services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'


export default store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)