import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'

const UserReportsPage = () => {

    const [userReport, setUserReport] = useState('')
    const { loggedIn, user } = useContext(AuthContext)
    let { id } = useParams()



    useEffect(()=> {
        const getUserReport = async () => {
            try {
                const response = await axios.get(`https://walksafenyc-api-production.up.railway.app/api/posts/getPostsByUser/${user._id}`)
                const data = response.data
                console.log(data)
                setUserReport(data)
            } catch (error) {
                console.error('Error fetching user report', error)
            }
        }
        getUserReport()
    }, [user._id])

    return (
        <div className="reportPage">
            <div className='form-container'>
            <h4>Incident Report</h4>
            <div className="report-info">
                <p>Date of Incident: {userReport.post_date}</p>
                <p>Time of Incident: {userReport.post_time}</p>
                <p>Incident Type: {userReport.incident_type}</p>
                <p>Comment: {userReport.comment}</p>
                <p>Location: </p>
            </div>
            <img src={city} alt="City" />
            </div>
        </div>
    )
}

export default UserReportsPage