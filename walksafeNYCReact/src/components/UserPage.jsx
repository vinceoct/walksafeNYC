import { Link, useParams } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'
import axios from 'axios'


const UserPage = () => {
    const { id } = useParams()

    const { loggedIn, user } = useContext(AuthContext)

    if (!loggedIn || !user) {
        return null
    }



    useEffect(()=> {
        const getProfilePage = async () => {
            try {
                const response = await axios.get(`https://walksafenyc-api-production.up.railway.app/api/users/${id}`)
                const data = response.data
                console.log(data)
            } catch (error) {
                console.error('Error fetching user', error)
            }
        }
        getProfilePage()
    }, [id])

    const [email, setEmail] = useState(user.email)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [password, setPassword] = useState(user.password)
    const [dateOfBirth, setDateOfBirth] = useState(user.date_of_birth)
    const [gender, setGender] = useState(user.gender)

    const handleProfileUpdate = async () => {
        try {
           const response = await axios.put(`https://walksafenyc-api-production.up.railway.app/api/users/${id}`,
           {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            date_of_birth: dateOfBirth,
            gender: gender 
          } )

    } catch (error) {
        console.error('Error updateing user', error)
    }
} 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
       handleProfileUpdate()
    }

    return (
        <div className="userPage">
            <h4>Profile Page</h4>
            <p><strong>First Name: {user.first_name} </strong></p>
            <input type="text" placeholder="Update First Name" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Update</button>

            <p><strong>Last Name: {user.last_name} </strong></p>
            <input type="text" placeholder="Update Last Name" value={lastName} 
            onChange={(e) => setLastName(e.target.value)}>
            </input>
            <button type="submit" onClick={handleSubmit}>Update</button>

            <p><strong>Email: {user.email} </strong></p>
            <input type="email" placeholder="Update Email" value={email} 
            onChange={(e) => setEmail(e.target.value)}> 
            </input>
            <button type="submit" onClick={handleSubmit}>Update</button>

            <p><strong>Date of Birth: {user.date_of_birth} </strong></p>
            <input type="date" value={dateOfBirth} 
            onChange={(e) => setDateOfBirth(e.target.value)}>
            </input>
            <button type="submit" onClick={handleSubmit}>Update</button>

            <p><strong>Gender: {user.gender}</strong></p>
            <input type="text" placeholder="Update Gender" value={gender} 
            onChange={(e) => setGender(e.target.value)}>
            </input>
            <button type="submit" onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default UserPage