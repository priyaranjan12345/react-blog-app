
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppHeader from "./components/AppHeader"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"


function App() {
  return (

    <BrowserRouter>
      <AppHeader></AppHeader>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
