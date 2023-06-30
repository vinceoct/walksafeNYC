import { Link } from 'react-router-dom'
import Main from './Main'


const Login = () => {
    return (
        <div className="login-page">
            <h4>This is the login page</h4>
            <Link class="createAccount" to="/createAnAccount">Create An Account</Link>
        </div>
    )
}

export default Login