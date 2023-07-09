import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import React, { useContext } from 'react';


const Nav = () => {
    const { loggedIn, user } = useContext(AuthContext)

    if (!loggedIn) {
    return (
        <div className="nav-links">
            <Link className="nav" to="/">Home</Link>
            <Link className="nav" to="/reportForm">Submit a Report</Link>
            <Link className="nav" to="/login">Login</Link>
            <Link className="nav" to="/reports">View all reports</Link>
        </div>
    )
    } else {
        const id = user._id
        return (
            <div className="nav-links">
                <Link className="nav" to="/">Home</Link>
                <Link className="nav" to="/reportForm">Submit a Report</Link>
                <Link className="nav" to={`login/${id}`}>Account</Link>
                <Link className="nav" to="/reports">View all reports</Link>
            </div>
        )
    }
}

export default Nav