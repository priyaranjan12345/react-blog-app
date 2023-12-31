import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import authService from "./service/AuthService"
import { login, logout } from "./store/authSlice"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from "./components/header/AppHeader"
import AppFooter from "./components/AppFooter"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.theme.themeMode)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = authService.getUsername()

    if (userData != '') {
      dispatch(login(userData))
    } else {
      dispatch(logout())
    }

    setLoading(false)

  }, [dispatch])

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return !loading ? (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
        <CssBaseline />
        <AppHeader />
        <main>
          <Outlet />
        </main>
        <AppFooter
          description="This is a blog app where bloggers can post theit blogs."
          title="Bloggy App" />
      </Box>
    </ThemeProvider>
  ) : null
}

export default App
