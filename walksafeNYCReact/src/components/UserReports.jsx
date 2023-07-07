import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'

const UserReports = () => {
    const { loggedIn, user } = useContext(AuthContext)
    let navigate = useNavigate()
    const [userReports, setUserReports] = useState([])

    useEffect(() => {
        try {
        const getUserReports = async () => {
            const response = await axios.get(`https://walksafenyc-api-production.up.railway.app/api/posts/getPostsByUser/${user._id}`)
            setUserReports(response.data)
        }
        } catch (error) {
            console.error('Error fetching user reports:', error);
        }
        getUserReports()
    }, [userReports])

    

    //const showUserReport = (id) => {
        //navigate(`${id}/`)
    //}

    return (
        <div className='allReportsPage'>
        <div className='form-container'>
        <section className="report-grid">
            {
                userReports.map((userReport) => (
                    <section key={userReport._id} onClick={()=>showUserReport(userReport._id)} className="userReports">
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
