import { createSlice} from '@reduxjs/toolkit'
import { api } from '../../app/services/api'
import type { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { Nullable} from '../../types'
import type { UserProfile } from '../../types'

type UserState = Nullable<UserProfile>;

const initialState = {
    firstName: null, 
    lastName: null,
} as UserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state: UserState) => {
            state.firstName = null
            state.lastName = null
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder.addMatcher(
            api.endpoints.fetchUserProfile.matchFulfilled,
            (state, action: PayloadAction<{ body: UserProfile }>) => {
                state.firstName = action.payload.body.firstName;
                state.lastName = action.payload.body.lastName;
            }
        ),
        builder.addMatcher(
            api.endpoints.updateUserProfile.matchFulfilled,
            (state, action: PayloadAction<{ body: UserProfile }>) => {
                state.firstName = action.payload.body.firstName
                state.lastName = action.payload.body.lastName
            }  
        )
    },
})

export const { resetUser } = userSlice.actions
export const selectCurrentUser = (state: RootState) => state.user
export default userSlice.reducer