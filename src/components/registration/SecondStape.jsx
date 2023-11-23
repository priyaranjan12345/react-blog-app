import { Button, Stack } from "@mui/material"
import InputComponent from "../InputComponent"
import { useDispatch } from "react-redux"
import { next } from "../../store/appStepperSlice"

function SecondStape() {
    const dispatch = useDispatch()
    const onNext = () => {
        dispatch(next())
    }

    return (
        <div>
            <Stack direction="column" alignItems="center" spacing={2}>
                <InputComponent label="Country" type="text" />
                <InputComponent label="State" type="text" />
                <InputComponent label="District" type="text" />
                <InputComponent label="Area Details" type="text" />
                <Button variant="contained" color="primary" onClick={onNext}>Next</Button>
            </Stack>
        </div>
    )
}

export default SecondStape