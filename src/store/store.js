import { configureStore } from '@reduxjs/toolkit'
import stepperSlice from './appStepperSlice'

const store = configureStore({
    reducer: {
        stepper: stepperSlice
        // todo: add more slice
    }
})

export default store