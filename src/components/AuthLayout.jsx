/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthLayout({ children, requiredAuth = false }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (requiredAuth && authStatus !== requiredAuth) {
            navigate("/login")
        } else if (!requiredAuth && authStatus !== requiredAuth) {
            navigate("/")
        }

        setLoader(false)
    }, [authStatus, navigate, requiredAuth])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout