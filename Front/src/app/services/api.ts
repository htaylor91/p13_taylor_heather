import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import type {Login, UserProfile} from '../../types'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers, { getState }) => {
            /**
             * If there is an auth token in the store, 
             * it will be used for authenticated requests.
             */
            const token = (getState() as RootState).auth.token
                
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
                return headers
            }
            return headers
        },
    }),

    endpoints: (builder) => ({
        createAuthToken: builder.mutation({
            query: (credentials: Login) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        fetchUserProfile: builder.mutation({
            query: () => ({
                url: 'user/profile',
                method: 'POST',
            }),
        }),

        updateUserProfile: builder.mutation({
            query: (user: UserProfile) => ({
                url: 'user/profile',
                method: 'PUT',
                body: user,
            }),
        }),
    }),
})

export const {
    useCreateAuthTokenMutation, 
    useFetchUserProfileMutation,
    useUpdateUserProfileMutation,
} = api