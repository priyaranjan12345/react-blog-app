import { Box, Button, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import InputComponent from "../InputComponent"
import { next, setFormData } from "../../store/appStepperSlice"

function FirstStep() {
    const formData = useSelector(state => state.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    console.log(formData["firstName"]);

    function setName(data) {
        dispatch(setFormData({ ...formData, ...data }))
        dispatch(next())
    }

    return (
        <Box component="form" onSubmit={handleSubmit(setName)}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <InputComponent
                    // value={formData["firstName"] !== undefined ? formData["firstName"] : ""}
                    label="First name"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", { required: true })}
                />
                <InputComponent
                    // value={formData["lastName"] ?? ""}
                    label="Last name"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", { required: true })}
                />
                <Button type="submit" variant="contained" color="primary">Next</Button>
            </Stack>

        </Box>
    )
}

export default FirstStep