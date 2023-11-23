import { Stack, FormControlLabel, Card, Box, CardContent, Checkbox, Button } from '@mui/material'
import { useState } from 'react'
import InputComponent from './InputComponent';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [isChecked, setChecked] = useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked,);
    };

    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="start"
                minHeight="100vh"
            >
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction="column" alignItems="center" spacing={2} margin={2}>
                            <h2>Sign in to your account</h2>
                            <p>
                                Don&apos;t have any account? &nbsp;
                                <Link to="/register" style={{ color: "black", textDecoration: "underline", fontSize: "16px" }}>
                                    Sign Up
                                </Link>
                            </p>
                            <InputComponent label="Email" type="email" />
                            <InputComponent label="Password" type="password" />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={isChecked} onChange={handleChange} name="isChecked" />
                                }
                                label="Please accept terms and conditions"
                            />
                            <Button variant="contained" color="primary"> Login </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default LoginForm