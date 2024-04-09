import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: '',
    role: '',
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
            state.role = ''
        },
        setUserEmail: (state, action) => {
            state.email = action.payload.userEmail;
        },
        setUserRole: (state, action) => {
            state.role = action.payload.role;
        }
    },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setUserEmail, setUserRole } = userSlice.actions

export default userSlice.reducer