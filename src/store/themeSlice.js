import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    themeMode: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => { 
            state.themeMode = action.payload
         },
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer