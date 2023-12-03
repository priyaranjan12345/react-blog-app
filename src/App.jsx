import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { useState, useEffect } from "react"
// import authService from "./service/AuthService"
// import { login, logout } from "./store/authSlice"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from "./pages/HomePage"
import AppHeader from "./components/AppHeader"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import AppFooter from "./components/AppFooter"
import { useSelector } from "react-redux";

function App() {
  const themeMode = useSelector(state => state.theme.themeMode)
  // check user is present or not on initial
  // const [loading, setLoading] = useState(true)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login(userData))
  //       } else {
  //         dispatch(logout())
  //       }
  //     }).finally(() => setLoading(false)
  //     )
  // }, [])

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
        </Routes>
      </BrowserRouter>
      <AppFooter description= "This is a blog app where bloggers can post theit blogs." title= "Bloggy App" />
    </ThemeProvider>
  )
}

export default App
