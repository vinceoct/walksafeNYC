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
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="youremail@gmail.com"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" placeholder="*******"/>
                <button type="submit">Log in</button>
            </form>
            <Link class="createAccount" to="/createAnAccount"><button>Create An Account</button></Link>
        </div>
    )
}

export default Login