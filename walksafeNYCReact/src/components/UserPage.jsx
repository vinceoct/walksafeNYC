import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'
import axios from 'axios'


const UserPage = () => {
    const { id } = useParams()

    const { loggedIn, user, logout } = useContext(AuthContext)

    let navigate = useNavigate()

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
    }}
 

    const handleDelete = async () => {
        try { 
            await axios.delete(`https://walksafenyc-api-production.up.railway.app/api/users/${id}`,)
        } catch (error) {
            console.error('Error deleting user', error)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
       handleProfileUpdate()
    }

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user from local storage
        logout(); // Clear user from context
        setSelectedUser(null);
        navigate(`/login?id=${selectedUser._id}`); // Navigate to login page with user ID as query parameter
      };



    return (
        <div className="userPage">
            <div className='form-container'>
            <div className='accountcont'>
            <h4>Profile Page</h4>
            <div className='accountinfo'>
                <p><strong>First Name: {user.first_name} </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update First Name" 
                 onChange={(e) => setFirstName(e.target.value)}></input>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Last Name: {user.last_name} </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Last Name" onChange={(e) => setLastName(e.target.value)}>
                </input>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Email: {user.email} </strong></p>
                <div className='userupdate'>
                <input type="email" placeholder="Update Email" onChange={(e) => setEmail(e.target.value)}> 
                </input>
            <button type="submit" onClick={handleSubmit}>Update</button>
   
   </div>         </div>
            <div className='accountinfo'>
                <p><strong>Date of Birth: {user.date_of_birth} </strong></p>
                <div className='userupdate'>
                <input type="date" id='date' onChange={(e) => setDateOfBirth(e.target.value)}>
                </input>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Gender: {user.gender}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Gender" onChange={(e) => setGender(e.target.value)}>
                </input>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Password: </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Password" onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </div>
            </div>
            <div className='userbuttons'>
                <button id='deleteaccount'type="button" onClick={handleDelete}>Delete Profile</button>
                <button id='logout' type='button' onClick={handleLogout}>Logout</button>
            </div>
            </div>
           
                <img src={city} alt="City" />
            
        </div>
        </div>
    )
}

export default UserPage