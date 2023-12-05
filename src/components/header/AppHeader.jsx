import { Toolbar, IconButton, Box, Stack, Badge, Typography, Button } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import ThemeSwitch from './ThemeSwitch';
import authService from '../../service/AuthService';

const drawerWidth = 200;

const CustomAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const AppHeader = () => {
    const theme = useTheme();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen((v) => !v);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        authService.logout();
        dispatch(logout())
    }

    const onTapBlogPostBtn = () => {
        if (location.pathname != "/blog-post") {
            navigate("/blog-post")
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CustomAppBar
                open={open}
                position="fixed"
                elevation={0}
                color='default'
                sx={{
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            ...(open && { display: 'none' }),
                        }}
                        onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bloggy App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Stack direction="row" spacing={2} margin={1}>
                        <Button
                            onClick={onTapBlogPostBtn}
                            variant="contained"
                            size="small"
                            sx={{ fontWeight: 'bold' }} disableElevation>
                            Post a blog
                        </Button>
                        <IconButton onClick={handleLogout} color='inherit'>
                            <PowerSettingsNewIcon
                                size="large"
                                color="inherit" />
                        </IconButton>
                        <IconButton color='inherit'>
                            <Badge badgeContent={10} color='error'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <ThemeSwitch />
                    </Stack>
                </Toolbar>
            </CustomAppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{ opacity: open ? 1 : 0 }}>
                    <p style={{ px: 10, flex: 1 }}> Menu </p>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => { navigate("/my-blogs") }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary='My Blogs' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => { console.log("Settings"); }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Settings' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <DrawerHeader sx={{ mb: 6 }} />
        </Box>
    );
}

export default AppHeader;