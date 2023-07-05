import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import city from '../assets/city.png'


const UserPage = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="userPage">
            <h4>Profile Page</h4>
            <p><strong>First Name: </strong></p>
            <input type="text" placeholder="Update First Name"></input>
            <button type="submit">Update</button>
            <p><strong>Last Name: </strong></p>
            <input type="text" placeholder="Update Last Name"></input>
            <button type="submit">Update</button>
            <p><strong>Email: </strong></p>
            <input type="email" placeholder="Update Email"></input>
            <button type="submit">Update</button>
            <p><strong>Date of Birth: </strong></p>
            <input type="date"></input>
            <button type="submit">Update</button>
            <p><strong>Gender: </strong></p>
            <input type="text" placeholder="Update Gender"></input>
            <button type="submit">Update</button>
        </div>
    )
}

export default UserPage