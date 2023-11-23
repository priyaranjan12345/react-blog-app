import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 1
}

const stepperSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        next: (state) => {
            const prevCount = state.count
            if (prevCount < 3) {
                state.count = prevCount + 1
            }
        },
        prev: (state) => {
            const prevCount = state.count
            if (prevCount > 1) {
                state.count = prevCount - 1
            }
        },

    }
})

export const { next, prev } = stepperSlice.actions

export default stepperSlice.reducer