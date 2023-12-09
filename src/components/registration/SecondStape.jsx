import { Box, Button, Stack } from "@mui/material"
import InputComponent from "../InputComponent"
import { useDispatch, useSelector } from "react-redux"
import { setIndex, setFormData } from "../../store/appStepperSlice"
import { useForm } from "react-hook-form"

function SecondStape() {
    const formData = useSelector(state => state.stepper.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    function setAddress() {
        // dispatch(setFormData({ ...formData, ...data }))
        dispatch(setIndex(3))
    }

    function onChange(e) {
        let name = e.target.name
        let value = e.target.value
        dispatch(setFormData({ ...formData, [name]: value }))
    }

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit(setAddress)}>
                <Stack direction="column" alignItems="center" spacing={2}>
                    <InputComponent
                        label="Country"
                        type="text"
                        value={formData["country"] ?? ""}
                        placeholder="Enter your country name"
                        {...register("country", { required: true, onChange: onChange })}
                    />
                    <InputComponent
                        label="State"
                        type="text"
                        value={formData["state"] ?? ""}
                        placeholder="Enter your state name"
                        {...register("state", { required: true, onChange: onChange })}
                    />
                    <InputComponent
                        label="City"
                        type="text"
                        value={formData["city"] ?? ""}
                        placeholder="Enter your city name"
                        {...register("city", { required: true, onChange: onChange })}
                    />
                    <InputComponent
                        label="Locality"
                        type="text"
                        value={formData["locality"] ?? ""}
                        placeholder="Enter your locality name"
                        {...register("locality", { required: true, onChange: onChange })}
                    />
                    <InputComponent
                        label="Pincode"
                        type="text"
                        value={formData["pinCode"] ?? ""}
                        placeholder="Enter your pincode name"
                        {...register("pinCode", { required: true, onChange: onChange })}
                    />
                    <InputComponent
                        label="Local Address"
                        type="text"
                        value={formData["localAddress"] ?? ""}
                        placeholder="Enter your local address"
                        {...register("localAddress", { required: true, onChange: onChange })}
                    />
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default SecondStape