
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            const {email, token} = action.payload;
            state.email = email;
            state.token = token;
        },
        clearUser: (state) => {
            state.email = null;
            state.token = null;
        }
    }
})


export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer