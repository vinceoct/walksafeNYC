import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ReportForm from './ReportForm'
import CreateAnAccount from './CreateAnAccount'
import ReportPage from './ReportPage'
import UserPage from './UserPage'
import Reports from './Reports'

const Main = () => {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reportForm" element={<ReportForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAnAccount" element={<CreateAnAccount />} />
                <Route path="/reportPage" element={<ReportPage />} />
                <Route path="/login/:id" element={<UserPage />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </div>
    )
}

export default Main