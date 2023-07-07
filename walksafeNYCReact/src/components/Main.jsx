import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ReportForm from './ReportForm'
import CreateAnAccount from './CreateAnAccount'
import ReportPage from './ReportPage'
import UserPage from './UserPage'
import Reports from './Reports'
import UserReports from './UserReports'
import UserReportsPage from './UserReportsPage'

const Main = () => {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reportForm" element={<ReportForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAnAccount" element={<CreateAnAccount />} />
                <Route path="/login/:id" element={<UserPage />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="reports/:id" element={<ReportPage />} />
                <Route path="/userReports" element={<UserReports />} />
                <Route path="/userReports/:id" element={<UserReportsPage />} />
            </Routes>
        </div>
    )
}

export default Main