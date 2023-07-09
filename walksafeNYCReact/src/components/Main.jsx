import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ReportForm from './ReportForm'
import CreateAnAccount from './CreateAnAccount'
import ReportPage from './ReportPage'
import UserPage from './UserPage'
import Reports from './Reports'
import UserReports from './UserReports'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'

const Main = () => {
    const { loggedIn, user } = useContext(AuthContext)
    if (loggedIn) {
    const id = user._id
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reportForm" element={<ReportForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAnAccount" element={<CreateAnAccount />} />
                <Route path={`/login/${id}`} element={<UserPage />} />
                <Route path="/reports" element={<Reports />} />
                <Route path={"/reports/:id"} element={<ReportPage />} />
                <Route path={`/login/${id}/userReports/${id}`} element={<UserReports />} />
                <Route path="/reports/:id" element={<ReportPage />} />
            </Routes>
        </div>
    )
    } else {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reportForm" element={<ReportForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAnAccount" element={<CreateAnAccount />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/reports/:id" element={<ReportPage />} />
            </Routes>
        )
    }
}

export default Main