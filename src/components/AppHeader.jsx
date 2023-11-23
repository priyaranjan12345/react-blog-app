import { AppBar, Toolbar, IconButton, Box, Stack, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const AppHeader = () => {
    return (
        <>
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <h4>React Blog App</h4>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Stack direction="row" spacing={2} margin={2}>
                            <IconButton color='inherit'>
                                <PowerSettingsNewIcon />
                            </IconButton>
                            <IconButton color='inherit'>
                                <Badge badgeContent={10} color='error'>
                                    <NotificationsNoneIcon />
                                </Badge>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default AppHeader;