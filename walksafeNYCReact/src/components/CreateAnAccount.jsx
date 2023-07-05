import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import city from '../assets/city.png'
import axios from 'axios'

const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users`)
    console.log(response.data.results)
}

getUsers()


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
            <div className='form-container'>
            
            <form className="create-account-form" onSubmit={handleSubmit}>
                <h4>Create an account</h4>
                <div className="account-question">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name" value={firstName} name="firstName" id="firstName"/>
                </div>
                <div className="account-question">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={(e)=>setLastName(e.target.value)}type="text" placeholder="Last Name" value={lastName} name="lastName" id="lastName"/>
                </div>
                <div className="account-question">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input onChange={(e)=>setDateOfBirth(e.target.value)}type="date" placeholder="Date of Birth" value={dateOfBirth} name="dateOfBirth" id="dateOfBirth"/>
                </div>
                <div className="account-question">
                    <label htmlFor="gender">Gender:</label>
                    <input onChange={(e)=>setGender(e.target.value)}type="text" placeholder="gender" value={gender} name="gender" id="gender"/>
                </div>
                <div className="account-question">
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="youremail@gmail.com"/>
                </div>
                <div className="account-question">
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" placeholder="*******"/>
                </div>
                <button id="create-account-button" className="submit-button" type="submit">Create Account</button>
                <Link class="login" to="/login"><button id="already-have-account" className="submit-button">Already have an account? Log in here.</button></Link>
            </form>
            <img src={city}/>
            </div>
        </div>
    )
}

export default CreateAnAccount