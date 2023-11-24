import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 1,
    formData: {}
}

const stepperSlice = createSlice({
    name: "stepper",
    initialState,
    reducers: {
        setIndex: (state, action) => {
            state.count = action.payload
        },
        setFormData: (state, action) => {
            state.formData = action.payload
        }
    }
})

export const { setIndex, setFormData } = stepperSlice.actions

export default stepperSlice.reducer