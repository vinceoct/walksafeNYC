import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const CreateAnAccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }


    return (
        <div className="create-account-page">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name" value={firstName} name="firstName" id="firstName"/>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={(e)=>setLastName(e.target.value)}type="text" placeholder="Last Name" value={lastName} name="lastName" id="lastName"/>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input onChange={(e)=>setDateOfBirth(e.target.value)}type="date" placeholder="Date of Birth" value={dateOfBirth} name="dateOfBirth" id="dateOfBirth"/>
                <label htmlFor="gender">Gender</label>
                <input onChange={(e)=>setGender(e.target.value)}type="text" placeholder="gender" value={gender} name="gender" id="gender"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="youremail@gmail.com"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" placeholder="*******"/>
                <button type="submit">Create Account</button>
            </form>
            <Link class="login" to="/login"><button>Already have an account? Log in here.</button></Link>
        </div>
    )
}

export default CreateAnAccount