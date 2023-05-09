import { createSlice} from '@reduxjs/toolkit'
import { api } from '../../app/services/api'
import type { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit'
import type { Nullable} from '../../types'
import type { RootState } from '../../app/store'
import type { LoginResponse } from '../../types'

type AuthState = Nullable<LoginResponse>;

const initialState = {
    token: null
} as AuthState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: AuthState) => {
            state.token = initialState.token
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
        builder.addMatcher(
            api.endpoints.createAuthToken.matchFulfilled,
            (state, action: PayloadAction<{ body: LoginResponse }>) => {
                state.token = action.payload.body.token
            }
        )
    },
})

export const { logout } = authSlice.actions
export const selectCurrentToken = (state: RootState) => state.auth.token
export default authSlice.reducer