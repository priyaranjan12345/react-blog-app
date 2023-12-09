import { Box, Paper, Stack, Avatar, Typography, ListItem } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useState, useEffect } from 'react';
import profileService from '../../service/ProfileService';

function useProfileDetails() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchProfileDetails = async () => {
        try {
            const response = await profileService.getMyProfile();
            setData(response.data);
        } catch (error) {
            setError(error)
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfileDetails();
    }, []);

    return { loading, error, data }
}

function UserProfile() {
    const { loading, error, data } = useProfileDetails();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <h2>🌀 Loading profile, please wait...</h2>
            </Box>
        );
    }

    if (error) {
        return (
            <>
                <Stack direction='column' alignItems='center' spacing={1} sx={{ paddingTop: 4 }}>
                    <Typography component="h2" variant="h5">
                        Something went wrong please try again.
                    </Typography>
                </Stack>
            </>
        );
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ padding: 4 }}>
                <Stack direction='column' alignItems='center'>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}>
                        <img src={`data:image/jpeg;base64,${data.profileImage}`} />
                    </Avatar>
                    <Stack direction='row' alignItems='end' spacing={1} sx={{ paddingTop: 4 }}>
                        <Typography component="h2" variant="h5">
                            {data.firstName + " " + data.lastName}
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                        {data.email}
                    </Typography>
                    <ListItem style={{ textAlign: "center" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LocationCityIcon sx={{ fontSize: 40, color: 'gray', padding: 1 }} />
                            <Typography variant="h6" color="text.secondary">
                                {data.address.country + " " + data.address.state + " - " + data.address.pinCode}
                            </Typography>
                        </div>
                    </ListItem>
                </Stack>
            </Paper>
        </Box>
    )
}

export default UserProfile