import { Box, Button, Stack } from "@mui/material"
import InputComponent from "../InputComponent"
import { useDispatch, useSelector } from "react-redux"
import { next, setFormData } from "../../store/appStepperSlice"
import { useForm } from "react-hook-form"

function SecondStape() {
    const formData = useSelector(state => state.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    function setAddress(data) {
        dispatch(setFormData({ ...formData, ...data }))
        dispatch(next())
    }

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit(setAddress)}>
                <Stack direction="column" alignItems="center" spacing={2}>
                    <InputComponent label="Country" type="text" />
                    <InputComponent label="State" type="text" />
                    <InputComponent label="District" type="text" />
                    <InputComponent label="Area Details" type="text" />
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default SecondStape