import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {base_url} from '../Firebase/database';

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query:()=> "products.json"
        }),
        getCategories: builder.query({
            query:()=>"categories.json"
        }),
        getProductsByCategory: builder.query({
            query:(category)=>`products.json?orderBy="category"&equalTo="${category}"`
        }),
        postOrders: builder.mutation({
            query: (order) => ({
              url:"orders.json",
              method:"POST",
              body:order
            })
        }),
        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json`,
            transformResponse:(response) => {
             if(!response) return []
             const data = Object.keys(response).map(key =>({id:key,...response[key]}))
             return data
            },
            providesTags:["order"]
          }),
          postProfileImage: builder.mutation({
            query: ({localId,image}) => ({
              url:`profileImage/${localId}.json`,
              method:"PUT",
              body:{image}
            }),
            invalidatesTags:["image"]
          }),
          getProfileImage: builder.query({
            query: (localId) => `profileImage/${localId}.json`,
            providesTags:["image"]
          }),
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, usePostOrdersMutation, useGetOrdersQuery, usePostProfileImageMutation, useGetProfileImageQuery } = shopApi;