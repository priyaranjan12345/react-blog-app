import { useState } from "react"
import { Button, FormControlLabel, Checkbox, Stack, CircularProgress } from "@mui/material";
import InputComponent from "../InputComponent"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from '../../store/authSlice';
import { setFormData } from "../../store/appStepperSlice";
import authService from "../../service/AuthService";

function ThirdStep() {
    const [loading, setLoading] = useState(false)
    const [isChecked, setChecked] = useState(false)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const formData = useSelector(state => state.stepper.formData)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    async function setCredentials() {
        setLoading(true);
        try {
            const response = await authService.registerUser(formData);
            authService.saveToken(response.data.authToken)
            dispatch(login(authService.getUsername()))
        } catch (error) {
            console.log("register error: " + error);
        } finally {
            setLoading(false)
        }
    }

    async function onChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name);
        if (name == "profileImage") {
            value = await fileToBase64(e.target.files[0]);
            console.log(value);
        }

        dispatch(setFormData({ ...formData, [name]: value }))
        console.log(formData);
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    }

    return (
        <form onSubmit={handleSubmit(setCredentials)}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <input
                    style={{ border: '2px solid #bcaaa4', width: '100%', padding: 15, borderRadius: '5px' }}
                    label="Profile Image"
                    type="file"
                    accept='image/png, image/jpg, image/jpeg'
                    {...register("profileImage", { required: false, onChange: onChange })} />
                <InputComponent
                    label="Email"
                    type="email"
                    value={formData["email"] ?? ""}
                    placeholder="Enter your email"
                    {...register("email", { required: true, onChange: onChange })} />
                <InputComponent
                    label="Password"
                    type="password"
                    value={formData["password"] ?? ""}
                    placeholder="Enter password"
                    {...register("password", { required: true, onChange: onChange })} />
                <FormControlLabel
                    control={
                        <Checkbox checked={isChecked} onChange={handleChange} name="isChecked" />
                    }
                    label="Please accept terms and conditions"
                />
                {
                    loading && <Button disabled variant="contained" color="primary">
                        <CircularProgress variant="indeterminate" color='inherit' size={20} sx={{ marginRight: 1 }} />
                        Loading…
                    </Button>
                }
                {!loading && <Button type='submit' variant="contained" color="primary"> Create Account </Button>}
            </Stack>
        </form>
    )
}

export default ThirdStep