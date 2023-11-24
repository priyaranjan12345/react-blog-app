import { Stack, FormControlLabel, Card, Box, CardContent, Checkbox, Button, CircularProgress, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputComponent from './InputComponent';
import authService from '../service/AuthService'
import { Link } from 'react-router-dom';


function LoginForm() {
    const { register, handleSubmit } = useForm()
    const [isChecked, setChecked] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [snackbarData, setOpen] = React.useState({
        open: false,
        message: ""
    });

    const closeSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const openSnackBar = (message) => {
        setOpen({
            open: true,
            message: message
        });
    }

    const toggleLoading = () => {
        setLoading(!isLoading)
    }

    const handleChange = (event) => {
        setChecked(event.target.checked,);
    };

    const handleLogin = (data) => {
        if (!isChecked) {
            openSnackBar("Please accept terms and conditions to login")
        } else {
            setLoading(true)
            authService.login({
                email: data.email,
                password: data.password
            }).then((response) => {
                setLoading(false)
                authService.saveToken(response.token)
            })
                .catch((error) => {
                    setLoading(false)
                    openSnackBar("Error during login, try again")
                    console.log("login error: " + error);
                })
        }
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnackBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="start"
                minHeight="100vh"
            >
                <Card variant="outlined">
                    <CardContent>
                        <Box component="form" onSubmit={handleSubmit(handleLogin)}>
                            <Stack direction="column" alignItems="center" spacing={2} margin={2}>
                                <h2>Sign in to your account</h2>
                                <p>
                                    Don&apos;t have any account? &nbsp;
                                    <Link to="/register" style={{ color: "black", textDecoration: "underline", fontSize: "16px" }}>
                                        Sign Up
                                    </Link>
                                </p>
                                <InputComponent
                                    label="Email"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email", { required: true })}
                                />
                                <InputComponent
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register("password", { required: true })}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={isChecked} onChange={handleChange} name="isChecked" />
                                    }
                                    label="Please accept terms and conditions"
                                />
                                {
                                    isLoading && <Button disabled variant="contained" color="primary" onClick={toggleLoading}>
                                        <CircularProgress variant="indeterminate" color='inherit' size={20} sx={{ marginRight: 1 }} />
                                        Loading…
                                    </Button>
                                }
                                {!isLoading && <Button type='submit' variant="contained" color="primary"> Login </Button>}
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Snackbar
                open={snackbarData.open}
                autoHideDuration={2000}
                message={snackbarData.message}
                onClose={closeSnackBar}
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </>
    )
}

export default LoginForm