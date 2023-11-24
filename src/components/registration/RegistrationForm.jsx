import {  Stack, Box, Card, CardContent, Step, Stepper, StepLabel } from "@mui/material"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setIndex } from "../../store/appStepperSlice"

import SecondStape from "./SecondStape"
import FirstStep from "./FirstStep"
import ThirdStep from "./ThirdStep"

function RegistrationForm() {
    const currentIndex = useSelector(state => state.stepper.count)
    const dispatch = useDispatch()

    const steps = [
        "Name",
        "Address",
        "Credentials"
    ]

    function showStep(step) {
        switch(step){
            case 1:
                return <FirstStep/>
            case 2:
                return <SecondStape/>
            case 3: 
                return <ThirdStep/>
        }
    }

    const handleStep = (index) => {
        if(currentIndex > index){
            dispatch(setIndex(index + 1))
        }
    }

    return (
        <div>
            <Box display="flex" justifyContent="center" alignItems="start" minHeight="100vh" >
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction="column" alignItems="stretch" spacing={2} margin={2} sx={{width: "350px"}}>
                            <h2 style={{margin: "auto"}}>Create your account</h2>
                            <p style={{margin: "auto"}}>
                                Already have an account? &nbsp;
                                <Link to="/login" style={{ color: "black", textDecoration: "underline", fontSize: "16px" }}>
                                    Sign In
                                </Link>
                            </p>
                            <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={currentIndex-1} alternativeLabel>
                                {
                                    steps.map(
                                        (label, i) => (
                                            <Step key={label}>
                                            <StepLabel onClick={()=>handleStep(i)}>{label}</StepLabel>
                                            </Step>
                                        )
                                    )
                                }
                            </Stepper>
                            </Box>
                            {showStep(currentIndex)}
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default RegistrationForm

// sfc
// const Input = () => {
//     return ( <>
//     </> );
// }
 
// export default Input;