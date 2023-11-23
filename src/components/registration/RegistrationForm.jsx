import {  Stack, Box, Card, CardContent, Step, Stepper, StepLabel } from "@mui/material"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

import SecondStape from "./SecondStape"
import FirstStep from "./FirstStep"
import ThirdStep from "./ThirdStep"

function RegistrationForm() {
    const currentIndex = useSelector(state => state.auth.count)

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

    return (
        <div>
            <Box component="form" display="flex" justifyContent="center" alignItems="start" minHeight="100vh">
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction="column" alignItems="center" spacing={2} margin={2}>
                            <h2>Create your account</h2>
                            <p>
                                Already have an account? &nbsp;
                                <Link to="/login" style={{ color: "black", textDecoration: "underline", fontSize: "16px" }}>
                                    Sign In
                                </Link>
                            </p>
                            <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={currentIndex-1} alternativeLabel>
                                {
                                    steps.map(
                                        (label) => (
                                            <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
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