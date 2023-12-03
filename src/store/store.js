import { configureStore } from '@reduxjs/toolkit'
import stepperSlice from './appStepperSlice'
import authSlice from './authSlice'
import themeSlice from './themeSlice'

const store = configureStore({
    reducer: {
        stepper: stepperSlice,
        auth: authSlice,
        theme: themeSlice
    }
})

export default store