import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-links">
            <Link class="nav" to="/">Home</Link>
            <Link class="nav" to="/reportForm">Submit a Report</Link>
            <Link class="nav" to="/login">Login</Link>
        </div>
    )
}

export default Nav