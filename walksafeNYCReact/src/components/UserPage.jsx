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
            <p><strong>First Name: {user.first_name} </strong></p>
            <input type="text" placeholder="Update First Name"></input>
            <button type="submit">Update</button>
            <p><strong>Last Name: {user.last_name} </strong></p>
            <input type="text" placeholder="Update Last Name"></input>
            <button type="submit">Update</button>
            <p><strong>Email: {user.email} </strong></p>
            <input type="email" placeholder="Update Email"></input>
            <button type="submit">Update</button>
            <p><strong>Date of Birth: {user.date_of_birth} </strong></p>
            <input type="date"></input>
            <button type="submit">Update</button>
            <p><strong>Gender: {user.gender}</strong></p>
            <input type="text" placeholder="Update Gender"></input>
            <button type="submit">Update</button>
        </div>
    )
}

export default UserPage