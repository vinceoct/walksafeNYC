import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const login = (userData) => {
        setLoggedIn(true)
        setUser(userData)
    }

    const logout = (userData) => {
        setLoggedIn(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }