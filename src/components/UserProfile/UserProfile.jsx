import { Box, Paper, Stack, Avatar, Typography, ListItem } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useState, useEffect } from 'react';
import profileService from '../../service/ProfileService';

function UserProfile() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        profileService.getMyProfile()
            .then((response) => {
                const data = response.data;
                console.log(data);
                setProfile(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ padding: 4 }}>
                <Stack direction='column' alignItems='center'>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}>
                        <img src={`data:image/jpeg;base64,${profile.profileImage}`} />
                    </Avatar>
                    <Stack direction='row' alignItems='end' spacing={1} sx={{ paddingTop: 4 }}>
                        <Typography component="h2" variant="h5">
                            {profile.firstName + " " + profile.lastName}
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                        {profile.email}
                    </Typography>
                    <ListItem style={{ textAlign: "center" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LocationCityIcon sx={{ fontSize: 40, color: 'gray', padding: 1 }} />
                            <Typography variant="h6" color="text.secondary">
                                {/* {profile.address.country + " " + profile.address.state + " - " + profile.address.pinCode} */}
                            </Typography>
                        </div>
                    </ListItem>

                </Stack>
            </Paper>
        </Box>
    )
}

export default UserProfile