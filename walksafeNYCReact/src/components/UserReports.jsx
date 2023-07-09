import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'

const UserReports = () => {
    const { loggedIn, user } = useContext(AuthContext)
    const  id  = user._id
    let navigate = useNavigate()
    const [userReports, setUserReports] = useState([])

    useEffect(() => {
        const getUserReports = async () => {
        try {
            const response = await axios.get(`https://walksafenyc-api-production.up.railway.app/api/posts/getPostsByUser/${id}`)
            console.log(response.data)
            setUserReports(response.data)
            console.log(userReports)
        } catch (error) {
            console.error('Error fetching user reports:', error);
        }
        }
        getUserReports();
    }, [])

    useEffect(() => {
        console.log(userReports)
    }, [userReports])


   


    return (
        <div className='allReportsPage'>
        <div className='form-container'>
        <section className="report-grid">
            {
                userReports.map((userReport) => (
                    <section className="userReports">
                            <p>Date of Incident: {userReport.post_date}</p>
                            <p>Time of Incident: {userReport.post_time}</p>
                            <p>Type of harassment: {userReport.incident_type}</p>
                            <p>Description: {userReport.comment}</p>
                    </section>
                ))
            }
        </section>
        <img src={city} alt="City" />
        </div>
        </div>
    )
}

export default UserReports
