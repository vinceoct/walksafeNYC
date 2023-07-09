import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

const UserReports = () => {
    const [comment, setComment] = useState('')
    const { loggedIn, user } = useContext(AuthContext)
    const  id  = user._id
    let navigate = useNavigate()
    const [userReports, setUserReports] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const getUserReports = async () => {
        try {
            const response = await axios.get(`https://walksafenyc-api-production-ba84.up.railway.app/api/posts/getPostsByUser/${id}`)
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


    const handleDelete = async (index) => {
        try { 
            await axios.delete(`https://walksafenyc-api-production-ba84.up.railway.app/api/posts/${userReports[index]._id}`,)
            setSuccess(true)
        } catch (error) {
            console.error('Error deleting report', error)
        }
    }

    const handleCommentUpdate = async (index) => {
        try {
           const response = await axios.put(`https://walksafenyc-api-production-ba84.up.railway.app/api/posts/${userReports[index]._id}`,
           {
            comment: comment
          } )
          setSuccess(true)
    } catch (error) {
        console.error('Error updating user', error)
    }}


   


    return (

        <div className='allReportsPage'>
            {success ? (
                <section>
                    <h1>Changes saved successfully.</h1>
                    <p>
                    <Link className="home" to="/"><button id="already-have-account" className="submit-button">Go home.</button></Link> 
                    </p>
                </section>
            ) : (
        <div className='form-container'>
        <section className="report-grid">
            {
                userReports.map((userReport, index) => (
                    <section key={index} className="userreports">
                            <div className='reportdetails'>
                            <p>Date of Incident:</p> <p>{userReport.post_date}</p>
                            </div>
                            <div className='reportdetails'>
                            <p>Time of Incident:</p> <p>{userReport.post_time}</p>
                            </div>
                            <div className='reportdetails'>
                            <p>Type of harassment:</p> <p>{userReport.incident_type}</p>
                            </div>
                            <div className='reportdetails'>
                            <p>Description:</p> <p>{userReport.comment}</p>
                            </div>
                            <div className='commentupdate'>
                            <input type="text" id='updateinput' placeholder="Edit comment" onChange={(e) => setComment(e.target.value)}>
                            </input>
                            <button type="submit" id="updateComment" onClick={() =>handleCommentUpdate(index)}>Update Comment</button>
                            </div>
                            <button id="deleteReport" onClick={() =>handleDelete(index)}>Delete Report</button>
                    </section>
                ))
            }
        </section>
        <img src={city} alt="City" />
        </div>
            )}
        </div>
    )
}

export default UserReports
