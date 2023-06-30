import { Link } from 'react-router-dom'
import Main from './Main'


const Login = () => {
    return (
        <div className="login-page">
            <form>
                <label for="email">email</label>
                <input name="email" id="email" type="email" placeholder="youremail@gmail.com"/>
                <label for="password">password</label>
                <input name="password" id="password" type="password" placeholder="*******"/>
            </form>
            <Link class="createAccount" to="/createAnAccount">Create An Account</Link>
        </div>
    )
}

export default Login