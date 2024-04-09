import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: ''

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
            
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.email = ''
        },
        setUserEmail: (state, action) => {
            state.email = action.payload.userEmail;
        },
    },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setUserEmail } = userSlice.actions

export default userSlice.reducer