import { useState } from "react"
import { Button, FormControlLabel, Checkbox, Stack } from "@mui/material";
import InputComponent from "../InputComponent"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setFormData } from "../../store/appStepperSlice";


function ThirdStep() {
    const [isChecked, setChecked] = useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked,);
    };
    const formData = useSelector(state => state.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    function setCredentials(data) {
        dispatch(setFormData({ ...formData, ...data }))
        // call register api
        // on success -> login Screen
        // on error -> retry
    }
    return (
        <div>
            <Stack direction="column" alignItems="center" spacing={2}>
                <InputComponent label="Email" type="email" />
                <InputComponent label="Password" type="password" />
                <FormControlLabel
                    control={
                        <Checkbox checked={isChecked} onChange={handleChange} name="isChecked" />
                    }
                    label="Please accept terms and conditions"
                />
                <Button variant="contained" color="primary">Submit</Button>
            </Stack>

        </div>
    )
}

export default ThirdStep