import { AppBar, Toolbar, IconButton, Box, Stack, Badge, Typography, FormControlLabel, Switch } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled } from '@mui/material/styles';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: `-${drawerWidth}px`,
//         ...(open && {
//             transition: theme.transitions.create('margin', {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     }),
// );

// const MyAppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 65,
    height: 34,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        margin: 2,
        padding: 0,
        transform: 'translateX(1px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(30px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 30,
        height: 30,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20,
    },
}));




const AppHeader = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="fixed"
                    elevation={0}
                    color='default'
                    sx={{
                        borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                            Bloggy App
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Stack direction="row" spacing={2} margin={1}>
                            <IconButton color='inherit'>
                                <PowerSettingsNewIcon
                                    size="large"
                                    color="inherit"
                                />
                            </IconButton>
                            <IconButton color='inherit'>
                                <Badge badgeContent={10} color='error'>
                                    <NotificationsNoneIcon />
                                </Badge>
                            </IconButton>
                            <FormControlLabel
                                control={<MaterialUISwitch sx={{marginLeft:2}} defaultChecked />}
                                label=""
                            />
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default AppHeader;