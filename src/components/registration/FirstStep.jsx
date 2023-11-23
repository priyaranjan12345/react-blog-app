import { Button, Stack } from "@mui/material"
import { useDispatch } from "react-redux"
import InputComponent from "../InputComponent"
import { next } from "../../store/appStepperSlice"

function FirstStep() {
    const dispatch = useDispatch()

    const onNext = () => {
        dispatch(next())
    }

    return (
        <div>
            <Stack direction="column" alignItems="center" spacing={2}>
                <InputComponent label="First name" type="text" />
                <InputComponent label="Last name" type="text" />
                <Button variant="contained" color="primary" onClick={onNext}>Next</Button>
            </Stack>

        </div>
    )
}

export default FirstStep