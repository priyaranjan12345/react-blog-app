import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 1,
    fromData: {}
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
        setFormData: (state, action) => {
            state.fromData = action
            console.log(state.fromData);
        }
    }
})

export const { next, prev, setFormData } = stepperSlice.actions

export default stepperSlice.reducer