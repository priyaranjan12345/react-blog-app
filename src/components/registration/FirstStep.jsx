import { Box, Button, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import InputComponent from "../InputComponent"
import { setIndex, setFormData } from "../../store/appStepperSlice"

function FirstStep() {
    const formData = useSelector(state => state.stepper.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    function setName() {
        dispatch(setIndex(2))
    }

    function onChange(e) {
        let name = e.target.name
        let value = e.target.value
        dispatch(setFormData({ ...formData, [name]: value }))
    }

    return (
        <Box component="form" onSubmit={handleSubmit(setName)}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <InputComponent
                    value={formData["firstName"] ?? ""}
                    label="First name"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", { required: true, onChange: onChange })}
                />
                <InputComponent
                    value={formData["lastName"] ?? ""}
                    label="Last name"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", { required: true, onChange: onChange })}
                />
                <Button type="submit" variant="contained" color="primary">Next</Button>
            </Stack>

        </Box>
    )
}

export default FirstStep