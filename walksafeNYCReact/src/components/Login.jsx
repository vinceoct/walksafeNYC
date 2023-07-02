import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="login-page">
            <h4>Login to your account.</h4>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-question">
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="youremail@gmail.com"/>
                </div>
                <div className="login-question">
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" placeholder="*******"/>
                </div>
                <button id="log-in-button" className="submit-button" type="submit">Log in</button>
                <Link class="createAccount" to="/createAnAccount"><button id="create-account" className="submit-button">Create An Account</button></Link>
            </form>
        </div>
    )
}

export default Login