import { configureStore } from '@reduxjs/toolkit'
import stepperSlice from './appStepperSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        stepper: stepperSlice,
        auth: authSlice
    }
})

export default store