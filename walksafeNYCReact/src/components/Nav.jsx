import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-links">
            <Link className="nav" to="/">Home</Link>
            <Link className="nav" to="/reportForm">Submit a Report</Link>
            <Link className="nav" to="/login">Login</Link>
        </div>
    )
}

export default Nav